import { sql } from "./_db.js";

let schemaPromise: Promise<void> | null = null;

/**
 * Idempotent, additive schema for the future student workspace.
 * It is intentionally applied through an admin-only route, not during
 * public waitlist or application form submissions.
 */
export function ensureStudentWorkspaceSchema(): Promise<void> {
  if (!schemaPromise) {
    schemaPromise = (async () => {
      await sql`
        CREATE TABLE IF NOT EXISTS student_accounts (
          id UUID PRIMARY KEY,
          email TEXT NOT NULL UNIQUE,
          display_name TEXT NOT NULL,
          auth_provider TEXT NOT NULL,
          provider_subject TEXT NOT NULL,
          email_verified_at TIMESTAMPTZ,
          privacy_notice_version TEXT,
          terms_version TEXT,
          created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
          disabled_at TIMESTAMPTZ,
          CONSTRAINT student_accounts_provider_subject_unique
            UNIQUE (auth_provider, provider_subject)
        );
      `;

      await sql`
        CREATE TABLE IF NOT EXISTS student_sessions (
          id UUID PRIMARY KEY,
          student_id UUID NOT NULL REFERENCES student_accounts(id) ON DELETE CASCADE,
          token_hash TEXT NOT NULL UNIQUE,
          created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
          expires_at TIMESTAMPTZ NOT NULL,
          last_seen_at TIMESTAMPTZ NOT NULL DEFAULT now(),
          revoked_at TIMESTAMPTZ
        );
      `;

      await sql`
        CREATE INDEX IF NOT EXISTS student_sessions_student_expiry_idx
        ON student_sessions (student_id, expires_at DESC);
      `;

      await sql`
        CREATE TABLE IF NOT EXISTS question_bank (
          id TEXT PRIMARY KEY,
          exam_code TEXT NOT NULL,
          subject_code TEXT NOT NULL,
          topic TEXT NOT NULL,
          prompt TEXT NOT NULL,
          options JSONB NOT NULL CHECK (jsonb_typeof(options) = 'array'),
          answer_key TEXT NOT NULL,
          explanation TEXT NOT NULL,
          takeaway TEXT NOT NULL,
          source_kind TEXT NOT NULL CHECK (source_kind IN ('original-sample', 'licensed', 'public-domain')),
          source_note TEXT,
          version INTEGER NOT NULL DEFAULT 1 CHECK (version > 0),
          is_published BOOLEAN NOT NULL DEFAULT false,
          created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
          updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
        );
      `;

      await sql`
        CREATE INDEX IF NOT EXISTS question_bank_exam_subject_idx
        ON question_bank (exam_code, subject_code, is_published);
      `;

      await sql`
        CREATE TABLE IF NOT EXISTS study_sessions (
          id UUID PRIMARY KEY,
          student_id UUID NOT NULL REFERENCES student_accounts(id) ON DELETE CASCADE,
          exam_code TEXT NOT NULL,
          subject_code TEXT NOT NULL,
          status TEXT NOT NULL DEFAULT 'active'
            CHECK (status IN ('active', 'completed', 'abandoned')),
          question_count INTEGER NOT NULL DEFAULT 0 CHECK (question_count >= 0),
          answered_count INTEGER NOT NULL DEFAULT 0 CHECK (answered_count >= 0),
          correct_count INTEGER NOT NULL DEFAULT 0 CHECK (correct_count >= 0),
          started_at TIMESTAMPTZ NOT NULL DEFAULT now(),
          completed_at TIMESTAMPTZ,
          updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
          CONSTRAINT study_session_counts_valid
            CHECK (correct_count <= answered_count AND answered_count <= question_count)
        );
      `;

      await sql`
        CREATE INDEX IF NOT EXISTS study_sessions_student_started_idx
        ON study_sessions (student_id, started_at DESC);
      `;

      await sql`
        CREATE TABLE IF NOT EXISTS study_answers (
          id BIGSERIAL PRIMARY KEY,
          study_session_id UUID NOT NULL REFERENCES study_sessions(id) ON DELETE CASCADE,
          student_id UUID NOT NULL REFERENCES student_accounts(id) ON DELETE CASCADE,
          question_id TEXT NOT NULL REFERENCES question_bank(id),
          question_version INTEGER NOT NULL DEFAULT 1 CHECK (question_version > 0),
          selected_option TEXT NOT NULL,
          is_correct BOOLEAN NOT NULL,
          answered_at TIMESTAMPTZ NOT NULL DEFAULT now(),
          CONSTRAINT study_answer_one_per_question UNIQUE (study_session_id, question_id)
        );
      `;

      await sql`
        CREATE INDEX IF NOT EXISTS study_answers_student_answered_idx
        ON study_answers (student_id, answered_at DESC);
      `;

      await sql`
        CREATE TABLE IF NOT EXISTS student_data_requests (
          id UUID PRIMARY KEY,
          student_id UUID NOT NULL REFERENCES student_accounts(id) ON DELETE CASCADE,
          request_type TEXT NOT NULL CHECK (request_type IN ('export', 'delete')),
          status TEXT NOT NULL DEFAULT 'requested'
            CHECK (status IN ('requested', 'in_progress', 'completed', 'rejected')),
          created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
          completed_at TIMESTAMPTZ
        );
      `;

      await sql`
        CREATE INDEX IF NOT EXISTS student_data_requests_student_idx
        ON student_data_requests (student_id, created_at DESC);
      `;

      await sql`
        CREATE TABLE IF NOT EXISTS app_schema_migrations (
          version INTEGER PRIMARY KEY,
          name TEXT NOT NULL,
          applied_at TIMESTAMPTZ NOT NULL DEFAULT now()
        );
      `;

      await sql`
        INSERT INTO app_schema_migrations (version, name)
        VALUES (2, 'student-workspace-foundation')
        ON CONFLICT (version) DO NOTHING;
      `;
    })().catch((error) => {
      schemaPromise = null;
      throw error;
    });
  }

  return schemaPromise;
}
