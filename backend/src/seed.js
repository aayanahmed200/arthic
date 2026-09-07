// Idempotent: safe to run more than once. Existing rows (matched by
// slug) are left untouched — this only fills in what's missing.
import { db } from "./db.js";

const entries = [
  {
    slug: "on-making-orbital-feel-slow",
    title: "on making orbital feel slow",
    excerpt:
      "most games are designed to keep you moving. we spent three weeks trying to design the opposite.",
    published_at: "2026-08-01",
    body: `Most games are designed to keep you moving forward: a new objective every few minutes, a marker pulling you toward it, a system unlocking right as the last one starts to get boring. Orbital isn't trying to do that, and it took us a while to admit how much of our instinct was built around doing it anyway.

The first prototype had the usual scaffolding — a quest log, a minimap, a list of things to go find. It played fine. It also felt like every game we'd quietly promised ourselves we wouldn't make again.

So we spent three weeks stripping it back. No markers. No minimap. No checklist. Just a station, some silence, and the slow work of figuring out what a few simple rules do to each other when you leave them alone long enough.

It's slower now. It asks more of you in the first ten minutes and less of you after that, which is the opposite of how most of these curves are supposed to go. We think that's the right trade. We're still finding out.`,
  },
  {
    slug: "pricing-a-game-for-people-with-less-money-and-more-time",
    title: "pricing a game for people with less money and more time",
    excerpt:
      "full price doesn't mean the same thing to everyone. here's how we're thinking about it.",
    published_at: "2026-06-14",
    body: `Every pricing conversation in games eventually turns into a conversation about what the market will bear, which is a polite way of asking how much you can charge before people stop buying. We wanted to ask a different question first: who is this actually for, and what does the price mean to them.

A lot of the people we want playing our games are exactly the people we used to be — broke, with more time than money, deciding between one game and something else for a month. Full price doesn't mean the same thing to that person as it does to someone with disposable income and forty minutes a week to spend it in.

So the plan is simple, if a little unusual for us to say out loud: price it low enough that the decision isn't painful, keep it that way after launch instead of "discounting" up to a number we picked in the first place, and never make the difference back through ads or a shop. If that means smaller margins, that's the trade we're choosing to make.

We don't have this fully solved yet. But it's the question we're starting from, not an afterthought we bolt on once the game is done.`,
  },
  {
    slug: "why-arthic-doesnt-have-investors",
    title: "why arthic doesn't have investors",
    excerpt: "nobody is waiting on a return. that changes what we're allowed to say no to.",
    published_at: "2026-03-09",
    body: `The honest answer is partly that nobody offered, and partly that we didn't really look. But the longer we've sat with it, the more it feels like the right call rather than the only one available to us.

Money with an expected return attached tends to come with a quiet, reasonable-sounding set of questions: what's the addressable market, what does the retention curve look like, have you considered a season pass. None of those questions are stupid. They're just questions that pull a small game toward being a bigger, more generic one, one reasonable answer at a time.

Without that pressure, we get to keep saying no to things that would make the games worse and the studio more fundable at the same time. We can spend three weeks on a mechanic that might not survive contact with a player. We can ship something small instead of padding it out to hit a price point someone else decided on.

It also means we're slower, and we're taking on more personal risk than a funded studio would. That's a real cost, not a talking point. We'd just rather carry it ourselves than hand someone else a reason to have an opinion about what arthic makes.`,
  },
];

const insert = db.prepare(`
  INSERT OR IGNORE INTO journal_entries (slug, title, excerpt, body, published_at)
  VALUES (?, ?, ?, ?, ?)
`);

let inserted = 0;
for (const e of entries) {
  const result = insert.run(e.slug, e.title, e.excerpt, e.body, e.published_at);
  if (result.changes > 0) inserted += 1;
}

console.log(
  `seed complete: ${inserted} new entr${inserted === 1 ? "y" : "ies"} added, ${
    entries.length - inserted
  } already present.`,
);
