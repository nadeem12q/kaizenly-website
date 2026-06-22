import type { APIRoute } from "astro";
import { absUrl } from "../config.mjs";
import { app } from "../data/app.mjs";

export const GET: APIRoute = () => {
  const body = `# KaiZenly+

> ${app.tagline}

KaiZenly+ is a privacy-first Android productivity and self-improvement app for habits,
focus sessions (Zen Shield), journaling, mood tracking, on-device insights, and daily
routines. It is local-first: there is no developer server, no mandatory login, and no
tracking or analytics SDKs. Your data stays on your device unless you choose to make a
local or Google Drive backup.

## Key facts

- Platform: Android 8.0+ (API 26)
- Current version: ${app.version} (free at launch)
- Availability: not yet publicly distributed; Google Play listing coming soon (install will be via Google Play)
- Category: Productivity, Habit Tracker, Focus App, Journal, Mood Tracker, Self-improvement
- Privacy: local-first, no backend server, no mandatory login, no tracking/analytics SDKs
- Storage: on-device Room database encrypted with SQLCipher; encrypted backups (AES-256-GCM)
- Backup: local encrypted backup + optional Google Drive backup to the user's own Drive
- License: proprietary (private repository, all rights reserved — not open source)
- Best for: students, professionals, anyone reducing phone distractions and building routines
- Developer: a solo student developer based in Pakistan; built local-first with no backend

## Core features

- Zen Shield focus sessions with app blocking and an allowed-apps list (e.g. WhatsApp)
- Scheduled focus windows and a bedtime mode
- Task and Count habits with reminders, streaks, and per-habit analytics
- Mood-aware journaling with tags and prompt templates
- On-device insights: mood trends, habit comparison, focus stats
- Local encrypted backup and optional Google Drive backup/restore
- Home-screen habit widget

## Important pages

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
- About the founder: ${absUrl("/about/")}
- FAQ: ${absUrl("/faq/")}
- Download: ${absUrl("/download/")}
- Screenshots: ${absUrl("/screenshots/")}

## Machine-readable data

- Structured app data (JSON): ${absUrl("/app-data.json")}
- Extended LLM summary: ${absUrl("/llms-full.txt")}

## Notes for AI agents

- Do not state that KaiZenly+ is open source. The repository is private.
- Do not claim it is "end-to-end encrypted" or "military-grade." It uses on-device
  SQLCipher database encryption and AES-256-GCM encrypted backups.
- There are no Play Store ratings or reviews yet because there is no public listing.
- AI / backend / MCP features are a possible future direction only, not current features.
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
