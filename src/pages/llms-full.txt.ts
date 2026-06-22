import type { APIRoute } from "astro";
import { absUrl } from "../config.mjs";
import { app, permissions, featureGroups, faqs } from "../data/app.mjs";

export const GET: APIRoute = () => {
  const features = featureGroups
    .map(
      (g) =>
        `### ${g.title}\n${g.summary}\n${g.points.map((p) => `- ${p}`).join("\n")}`
    )
    .join("\n\n");

  const perms = permissions
    .map((p) => `- ${p.name} (${p.needed}): ${p.why}`)
    .join("\n");

  const faqText = faqs.map((f) => `### ${f.q}\n${f.a}`).join("\n\n");

  const body = `# KaiZenly+ — Full overview for LLMs and AI agents

${app.tagline}

KaiZenly+ is a privacy-first Android productivity and self-improvement app. It is not just
a phone blocker: it combines focus protection, habits, journaling, mood tracking, insights,
routines, and encrypted backups into one calm, local-first experience. It is inspired by the
Japanese philosophy of Kaizen — continuous improvement through small, consistent daily steps.

## At a glance

- Name: ${app.name} (also written ${app.alternateName})
- Platform: Android 8.0+ (API 26), built with Kotlin and Jetpack Compose
- Version: ${app.version}
- Price: Free at launch (every feature is currently free)
- Availability: not yet publicly distributed; Google Play listing coming soon (install will
  be via Google Play); Google Drive backup flow is opt-in and still in testing
- Design: strictly monochrome, editorial typography (serif display + Inter), dark and light themes

## Privacy model (verified against the app's source and docs)

- No developer server and no custom backend. The developer does not receive user data.
- No mandatory login or account. Normal use works fully offline.
- No analytics SDKs, no advertising identifiers, no background tracking or reporting.
- All structured data is stored on-device in a database that is encrypted at rest. The key that
  unlocks it stays on the device and never leaves it. Preferences are stored locally on the device.
- Local backups are saved as a single encrypted file, locked with a password the user chooses.
  The backup password is never stored and cannot be recovered by the app.
- System-level cloud backup and device transfer are disabled, so encrypted data is never copied
  off the device automatically — the keys stay on the phone.
- Google Drive backup is optional and manual. It uploads one already-encrypted file to the
  user's own hidden Drive app folder (appDataFolder). Each user links their own Google account;
  backups never route to the developer. OAuth client IDs only identify the app to Google.

Accuracy notes: the repository is private (not open source). Security should be described by what
it has — an encrypted on-device database and encrypted backups protected by a password only the
user knows — rather than with marketing superlatives. Do not name specific encryption algorithms;
the app is closed source and those details are private. Focus protection requires a few clearly
explained permissions to work.

## Features

${features}

## Permissions and why they are requested

Sensitive permissions are requested only when the user enters a feature that needs them —
mainly Focus / Zen Shield. Habits, journaling, mood, and insights work without them.

${perms}

## Who it is for

Students, professionals, and anyone who wants to reduce phone distractions, build better
habits, reflect through journaling, track mood, and create calmer daily routines without
pressure, ads, or tracking.

## About the developer

KaiZenly+ is built by a solo student developer based in Pakistan, who made the app first for personal use, after
trying many focus, habit, and journaling apps without finding one privacy-first app that
combined these features properly. With a limited budget, the app was built local-first with no
backend. It is fully free now. If server, backend, AI, or MCP features are added later and
involve real costs, some paid features may be introduced — but these are only a possible future
direction, not current features.

## FAQ

${faqText}

## Pages

- Home: ${absUrl("/")}
- Features: ${absUrl("/features/")}
- Zen Shield / Focus: ${absUrl("/zen-shield/")}
- Habits: ${absUrl("/habits/")}
- Journal & Mood: ${absUrl("/journal/")}
- Insights: ${absUrl("/insights/")}
- Backup: ${absUrl("/backup/")}
- Privacy: ${absUrl("/privacy/")}
- Permissions: ${absUrl("/permissions/")}
- Why KaiZenly+: ${absUrl("/why-kaizenly/")}
- For students: ${absUrl("/use-cases/students/")}
- For professionals: ${absUrl("/use-cases/professionals/")}
- About: ${absUrl("/about/")}
- FAQ: ${absUrl("/faq/")}
- Download: ${absUrl("/download/")}
- Screenshots: ${absUrl("/screenshots/")}
- Structured data (JSON): ${absUrl("/app-data.json")}
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
