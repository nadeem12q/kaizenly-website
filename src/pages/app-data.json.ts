import type { APIRoute } from "astro";
import { absUrl } from "../config.mjs";
import { app, permissions, featureGroups } from "../data/app.mjs";
import { categories } from "../data/screenshots.mjs";

export const GET: APIRoute = () => {
  const data = {
    name: app.name,
    alternateName: app.alternateName,
    tagline: app.tagline,
    description:
      "Privacy-first Android app for habits, focus (Zen Shield), journaling, mood tracking, routines, and on-device insights. Local-first, no account, no tracking.",
    platform: "Android",
    minAndroidVersion: app.minAndroid,
    appVersion: app.version,
    price: { amount: "0", currency: "USD", note: "Free at launch" },
    license: "Proprietary (private repository, all rights reserved — not open source)",
    category: app.category,
    availability: {
      status: app.availability.status,
      playStore: app.availability.playStore,
      googleDriveBackup: app.availability.googleDrive,
    },
    privacy: {
      localFirst: true,
      developerServer: false,
      backend: false,
      mandatoryLogin: false,
      tracking: false,
      analyticsSdk: false,
      adsOrAdvertisingId: false,
      developerReceivesUserData: false,
    },
    storage: {
      onDevice: true,
      database: "Room (SQLite) encrypted at rest with SQLCipher",
      databaseKey: "generated per install, wrapped by Android Keystore AES-256-GCM",
      preferences: "DataStore (local)",
      backupEncryption: "AES-256-GCM with PBKDF2-HMAC-SHA256 (600,000 iterations)",
      androidAutoBackup: false,
      endToEndEncryptedClaim: false,
    },
    backup: {
      local: { available: true, modes: ["Data only", "Full backup with journal media"], passwordProtected: true },
      googleDrive: {
        available: true,
        optional: true,
        manual: true,
        status: "in testing",
        destination: "user's own Google Drive hidden app folder (appDataFolder)",
        routesToDeveloper: false,
      },
    },
    features: featureGroups.map((g) => ({
      id: g.id,
      title: g.title,
      summary: g.summary,
      details: g.points,
    })),
    permissions: permissions.map((p) => ({
      name: p.name,
      androidPermission: p.id,
      neededFor: p.needed,
      reason: p.why,
    })),
    targetUsers: [
      "Students",
      "Professionals",
      "People reducing phone distractions",
      "People building daily habits and routines",
    ],
    futureRoadmapDisclaimer:
      "AI, MCP, or backend features are only a possible future direction and are not current features. Some future features may become paid only if real server/AI costs are involved.",
    screenshots: categories.map((c) => ({
      category: c.id,
      title: c.title,
      count: c.shots.length,
      files: c.shots.map((s) => absUrl(`/screenshots/${s.file}`)),
    })),
    urls: {
      home: absUrl("/"),
      features: absUrl("/features/"),
      zenShield: absUrl("/zen-shield/"),
      habits: absUrl("/habits/"),
      journal: absUrl("/journal/"),
      insights: absUrl("/insights/"),
      backup: absUrl("/backup/"),
      privacy: absUrl("/privacy/"),
      permissions: absUrl("/permissions/"),
      about: absUrl("/about/"),
      faq: absUrl("/faq/"),
      download: absUrl("/download/"),
      screenshots: absUrl("/screenshots/"),
      llms: absUrl("/llms.txt"),
      llmsFull: absUrl("/llms-full.txt"),
    },
  };

  return new Response(JSON.stringify(data, null, 2), {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
};
