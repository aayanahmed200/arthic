# Legal review required before broad launch

Internal launch checklist — not a public policy. The public Privacy Policy, Terms of Service and Cookie/Browser Storage notice have been rewritten to better match the product and explain its current data handling. They are not a substitute for review by a qualified Pakistan-based lawyer and do not guarantee that Arthic will avoid claims, regulatory action or liability.

## Items the operator must confirm

1. **Identify the legal operator.** Confirm the full legal name of the individual or entity operating Arthic, its legal form and a service address for legal notices. Do not imply that Arthic is incorporated unless it is. Add verified operator details to the public Terms and Privacy Policy.
2. **Confirm capacity and ownership.** Confirm who can validly own and operate the service, sign provider contracts and accept legal obligations. If an owner/operator is under the age of majority, obtain advice from a parent/guardian and qualified local counsel about appropriate adult or legal-entity arrangements.
3. **Obtain a Pakistan legal review.** Ask counsel to review the Terms against current federal and provincial consumer-protection, contract, e-commerce, intellectual-property, cybercrime and other applicable laws. Review the provinces and forums where the service is offered. Do not rely on blanket exclusions or a fixed PKR 5,000 liability cap.
4. **Complete a minors' privacy and consent process.** The account checkbox is currently a self-declaration; it does not independently verify a parent's identity, age or consent. Before enabling accounts for users aged 13–17 at scale, design and verify a parent/guardian consent mechanism with suitable notices, withdrawal, support and recordkeeping. Confirm the correct minimum age and handling of under-13 requests with counsel.
5. **Map actual data flows.** Confirm the Supabase project region, Vercel region and log retention, database backups, OAuth scopes, subprocessors, access controls and any cross-border transfers. Publish accurate details and ensure provider contracts/settings match the Privacy Policy.
6. **Finish deletion operations.** Settings currently records a pending deletion request; it does not delete the Supabase Auth identity. Define who verifies and executes a request, how the authentication user and database rows are both removed, how backups expire, and how completion is recorded. Test this workflow before public account onboarding.
7. **Confirm retention periods.** Set operational retention periods for waitlist records, recruitment applications, inactive accounts, practice history, security logs and backups. Implement deletion/review schedules where promised.
8. **Review content rights.** Keep source and permission records for every non-original question, diagram, logo, image and excerpt. Provide a workable notice-and-takedown process. Do not claim official exam-board affiliation.
9. **Payments and marketing.** Before accepting payments, obtain review of prices, renewals, cancellation, refunds and mandatory consumer disclosures. Before sending marketing email, implement consent, unsubscribe and suppression controls.
10. **Incident response.** Establish a contact owner, access-revocation process, security-incident triage, evidence preservation and any notices legally required if personal information is exposed.

## Current technical boundary

- Student identity: Supabase Auth, Google OAuth PKCE.
- Browser auth session: sessionStorage for the active tab.
- Application records: PostgreSQL tables created by the protected admin setup route.
- Synced learning data: exam/subject, session times, question IDs, selected options and correctness.
- Admin access: Google identity checked against server-only ADMIN_EMAILS.
- Admin statistics: aggregate registered accounts, saved practice sessions/answers, published questions, waitlist, applications and open data requests. No anonymous page-view analytics are included.
- Deletion: request queue only. No Supabase Auth admin/service-role deletion is wired into the public API.

**Launch gate:** do not describe Arthic as legally certified or fully compliant, and do not broadly enable student accounts for minors, until operator identity, guardian consent, deletion workflow, provider/data-flow map and lawyer review are complete.