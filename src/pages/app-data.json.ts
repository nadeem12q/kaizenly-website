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
      database: "on-device database, encrypted at rest",
      databaseKey: "stays on the device and never leaves it",
      preferences: "stored locally on the device",
      backupEncryption: "encrypted, protected by a user-only password",
      androidAutoBackup: false,
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
    dataSafety: {
      summary: "Mirrors the Google Play Data safety form: the developer collects no data and shares no data.",
      dataCollected: "none",
      dataShared: "none",
      encryptedInTransit: true,
      encryptedAtRest: true,
      userCanDeleteData: true,
      deletionMethod: "Delete a backup or uninstall the app; there is no developer-held copy.",
      notCollected: [
        "Personal info (name, email, address)",
        "Financial or payment info",
        "Location",
        "Contacts",
        "Messages or call logs",
        "Photos, audio, or files taken off the device",
        "App activity or usage analytics",
        "Advertising or device identifiers",
      ],
    },
    legal: {
      privacyPolicy: absUrl("/privacy-policy/"),
      terms: absUrl("/terms/"),
      dataSafety: absUrl("/data-safety/"),
      privacyOverview: absUrl("/privacy/"),
      governingLaw: "Pakistan",
      contactEmail: null,
      contactNote: "A public contact email will be added before the Google Play launch.",
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
      privacyPolicy: absUrl("/privacy-policy/"),
      terms: absUrl("/terms/"),
      dataSafety: absUrl("/data-safety/"),
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
