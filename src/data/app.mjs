// ---------------------------------------------------------------------------
// KaiZenly+ — single source of truth for app facts.
// Every claim here was verified against the Android project
// (README.md, DESIGN.md, AndroidManifest.xml, docs/PRIVACY.md, docs/PERMISSIONS.md,
// KaiZenly_Brand_Meaning.md). Do not add unverified claims.
// ---------------------------------------------------------------------------

export const app = {
  name: 'KaiZenly+',
  alternateName: 'KaiZenly Plus',
  tagline: 'Improve your life calmly, one small step at a time.',
  shortTagline: 'Small steps. Better days.',
  version: '0.1.1',
  platform: 'Android',
  minAndroid: 'Android 8.0 (API 26)',
  price: 'Free',
  category: [
    'Productivity',
    'Habit Tracker',
    'Focus App',
    'Journal',
    'Mood Tracker',
    'Self-improvement',
  ],
  availability: {
    status: 'Coming soon to Google Play — not yet publicly distributed',
    playStore: 'Coming soon — not yet listed',
    googleDrive: 'Optional, in testing — opt-in backup/restore to your own Drive',
  },
};

// --- Download / distribution (single source of truth) -----------------------
// The app is not distributed directly yet. When the Google Play listing goes
// live, set `live: true` and fill in `playStoreUrl` — every "Coming soon"
// button across the site will turn into a "Get it on Google Play" link.
export const download = {
  live: false,
  playStoreUrl: '', // e.g. 'https://play.google.com/store/apps/details?id=app.kaizenly'
  comingSoonLabel: 'Coming soon',
  liveLabel: 'Get it on Google Play',
};

// --- Privacy model (verified) ----------------------------------------------
export const privacy = {
  facts: [
    'No developer server and no custom backend — the app does not send your data to the developer.',
    'No mandatory login or account — normal use works fully offline.',
    'No analytics SDKs, no advertising IDs, no background tracking or reporting.',
    'All data lives on your device in an encrypted database.',
    'Local backups are encrypted and protected by a password only you know.',
    'Google Drive backup is optional and uploads an already-encrypted file to your own Drive.',
  ],
  // Things we deliberately do NOT claim:
  // - not "open source" (repo is private, all rights reserved)
  // - not "end-to-end encrypted" / "military-grade"
  // - not "zero permissions" (the app does need permissions for focus protection)
};

// --- Storage / encryption model (verified from README) ----------------------
export const storage = {
  database:
    'Your data is stored in a database on your device, and that database is encrypted. The key that unlocks it stays on your device and never leaves it.',
  preferences:
    'Local preferences (theme, onboarding state, parachute balance, schedules) are stored on the device.',
  backupFormat:
    'A backup is saved as a single encrypted file, locked with a password you choose. The backup password is never stored and cannot be recovered by the app.',
  androidAutoBackup:
    'System-level cloud backup and device transfer are turned off, so your encrypted data is never copied off the device automatically — it stays on your phone.',
};

// --- Permissions (verified against AndroidManifest.xml + docs/PERMISSIONS.md) -
export const permissions = [
  {
    name: 'Usage Access',
    id: 'android.permission.PACKAGE_USAGE_STATS',
    needed: 'For focus protection',
    why: 'Lets Zen Shield notice when a distracting app is opened during a focus session, and powers on-device screen-time insights. You enable it yourself in Android settings; the app cannot grant it automatically.',
  },
  {
    name: 'Accessibility Service',
    id: 'android.permission.BIND_ACCESSIBILITY_SERVICE',
    needed: 'For focus protection',
    why: 'Used only during active focus sessions to detect blocked apps and return you to your Focus Space. It reads package and class names for enforcement — it does not read message text, passwords, keystrokes, or screen content.',
  },
  {
    name: 'Display over other apps',
    id: 'android.permission.SYSTEM_ALERT_WINDOW',
    needed: 'For focus protection',
    why: 'Shows the full-screen Focus / Distraction Wall over a blocked app during an active session.',
  },
  {
    name: 'Device Admin',
    id: 'android.permission.BIND_DEVICE_ADMIN',
    needed: 'Optional strict mode',
    why: 'Optional. Enables a throttled device lock after repeated bypass attempts in strict focus. Never enabled by default, requested only from the Focus setup, and emergency calls stay available.',
  },
  {
    name: 'Notifications',
    id: 'android.permission.POST_NOTIFICATIONS',
    needed: 'Reminders & sessions',
    why: 'Shows habit reminders and the ongoing notification for an active Zen Shield focus session.',
  },
  {
    name: 'Foreground Service',
    id: 'android.permission.FOREGROUND_SERVICE (+ SPECIAL_USE)',
    needed: 'For focus protection',
    why: 'Keeps an active focus session running reliably with a visible ongoing notification.',
  },
  {
    name: 'Phone state (call safety)',
    id: 'android.permission.READ_PHONE_STATE',
    needed: 'Call safety',
    why: 'Lets focus mode detect an incoming call so it can step aside gracefully instead of blocking your phone during a call.',
  },
  {
    name: 'Microphone',
    id: 'android.permission.RECORD_AUDIO',
    needed: 'Only for voice notes',
    why: 'Used only when you record a voice note inside a journal entry. Recordings stay in app-private storage.',
  },
  {
    name: 'Battery optimization exemption',
    id: 'android.permission.REQUEST_IGNORE_BATTERY_OPTIMIZATIONS',
    needed: 'Reliable scheduling',
    why: 'Helps scheduled focus, bedtime mode, and reminders run on time without the system killing them in the background.',
  },
  {
    name: 'Run at startup',
    id: 'android.permission.RECEIVE_BOOT_COMPLETED',
    needed: 'Session persistence',
    why: 'Lets an active focus session and schedules survive a device restart.',
  },
  {
    name: 'Internet',
    id: 'android.permission.INTERNET',
    needed: 'Only for Drive backup',
    why: 'Used only for optional Google account sign-in and manual Google Drive backup / restore. Normal use never needs the network.',
  },
  {
    name: 'Vibrate',
    id: 'android.permission.VIBRATE',
    needed: 'Haptics',
    why: 'Provides subtle haptic feedback, for example on focus completion.',
  },
];

// --- Feature groups (verified from README "Core Features") -------------------
export const featureGroups = [
  {
    id: 'habits',
    title: 'Habits',
    summary:
      'Build consistent daily routines with a full-featured, calm habit tracker.',
    points: [
      'Two habit types: simple Task (yes/no) or Count goals with targets and units.',
      'Per-habit reminders with a custom time picker, plus snooze and notification actions.',
      'Streaks, best streaks, consistency %, calendar heatmaps, and per-habit analytics.',
      'Subtasks, repeat schedules (daily / weekdays / custom), tags and categories.',
      'Starter habits seeded from the goals you pick during onboarding.',
    ],
  },
  {
    id: 'focus',
    title: 'Focus & Zen Shield',
    summary:
      'Protect your attention with enforced focus sessions designed to add real friction to distraction.',
    points: [
      'Timer-based focus sessions with a full-screen Focus Space.',
      'Zen Shield app blocking via Accessibility + Usage Access + a foreground service.',
      'Allow up to 8 essential apps (for example WhatsApp or phone) during a session.',
      'Scheduled focus windows and Bedtime mode that auto-activate on your chosen days.',
      'A Parachute system of limited early-exit tokens to make breaking focus a deliberate choice.',
      'Completion celebration with a "View Insights" call to action.',
    ],
  },
  {
    id: 'journal',
    title: 'Journal & Mood',
    summary: 'Reflect on your day with rich entries and integrated mood check-ins.',
    points: [
      'Journal entries with title, body, tags, activities, and prompt templates.',
      'Mood check-ins scored 1–5 with labels, integrated into the journal flow.',
      'Optional photos and voice notes, stored in app-private storage.',
      'Case-insensitive full-text search and Markdown export of all entries.',
    ],
  },
  {
    id: 'insights',
    title: 'Insights',
    summary:
      'Understand your patterns with private analytics computed entirely on your device.',
    points: [
      '7-day and 30-day mood trends with a monochrome mood-distribution donut.',
      'This-week vs last-week habit comparison bars with signed deltas.',
      'A 5-week habit completion heatmap and mood–focus correlation.',
      'Stat tiles for average mood, weekly focus minutes, consistency, and current streak.',
      'CSV export of up to 90 days of focus minutes and average mood.',
    ],
  },
  {
    id: 'backup',
    title: 'Backup & Restore',
    summary: 'Keep your data under your control with encrypted, user-initiated backups.',
    points: [
      'Local encrypted backup: Data Only, or Full Backup including journal media.',
      'Encrypted and locked with a password only you know (not recoverable by the app).',
      'Optional Google Drive backup to your own hidden Drive app folder.',
      'Restore previews the backup contents before replacing local data.',
    ],
  },
  {
    id: 'routines',
    title: 'Routines & Widget',
    summary: 'Structure your day and keep improvement one tap away.',
    points: [
      'Scheduled focus windows and Bedtime mode for predictable daily structure.',
      'A home-screen Habit Glance widget to check off today’s habits without opening the app.',
      'A calm onboarding flow that seeds starter habits from your goals.',
      'System / Dark / Light themes in a strictly monochrome design.',
    ],
  },
];

// --- "What KaiZenly+ helps with" (home) -------------------------------------
export const helpsWith = [
  {
    title: 'Stop distractions',
    body: 'Zen Shield focus sessions add friction to the apps that pull you away.',
  },
  {
    title: 'Build better habits',
    body: 'Track Task and Count habits with streaks, reminders, and gentle progress.',
  },
  {
    title: 'Reflect through journaling',
    body: 'Write honest entries with mood check-ins, tags, and prompt templates.',
  },
  {
    title: 'Understand yourself',
    body: 'See mood trends, habit comparisons, and focus stats — all computed on-device.',
  },
  {
    title: 'Protect your routine',
    body: 'Schedule focus windows and a bedtime mode that run automatically.',
  },
];

// --- Trust strip (home) -----------------------------------------------------
export const trustStrip = [
  'Local-first',
  'No developer server',
  'No mandatory login',
  'No tracking or ads',
  'Optional Google Drive backup',
];

// --- FAQ --------------------------------------------------------------------
export const faqs = [
  {
    q: 'Is KaiZenly+ free?',
    a: 'Yes. KaiZenly+ is fully free at launch (version 0.1.1) and every feature is included. If server, backend, or AI features are added in the future, some of those may become paid — but nothing is paid today.',
  },
  {
    q: 'Does KaiZenly+ have a server or backend?',
    a: 'No. There is no developer server and no custom backend. The app works on your device. The only network feature is optional Google Drive backup, which talks directly to your own Google account.',
  },
  {
    q: 'Where is my data stored?',
    a: 'On your device, in a local encrypted database. Preferences are stored on the device too. Nothing is uploaded unless you choose to make a backup.',
  },
  {
    q: 'Why does the app ask for permissions?',
    a: 'Sensitive permissions are only requested when you enter a feature that needs them — mainly Focus / Zen Shield. Habits, journaling, mood, and insights work without them. See the Permissions page for a line-by-line explanation.',
  },
  {
    q: 'What is the Google Drive backup used for?',
    a: 'It is an optional, manual backup of an already-encrypted file to your own hidden Drive app folder. Each user links their own Google account; backups never go to the developer. This flow is still in testing.',
  },
  {
    q: 'Is it on the Play Store?',
    a: 'Not yet — a Google Play listing is coming soon. Until then the app is not publicly distributed, so there is no Play Store badge, rating, or review yet. When it launches, you will be able to install it straight from Google Play.',
  },
  {
    q: 'Can I allow WhatsApp during a focus session?',
    a: 'Yes. You can keep up to 8 essential apps — such as WhatsApp or your phone dialer — on an allow-list so they stay usable while everything else is blocked.',
  },
  {
    q: 'Is it for students?',
    a: 'Yes — students are exactly who KaiZenly+ was built for. It was made by a student who knows how hard it is to focus with a phone full of distractions, so study sessions, exam-prep focus blocks, and steady daily habits are at its core. It works just as well for anyone else who wants calmer focus, but if you are a student, this was made with you in mind.',
  },
  {
    q: 'Is KaiZenly+ a habit tracker or an app blocker?',
    a: 'Both, and more. It combines habits, focus/app-blocking, scheduled focus, bedtime mode, journaling, mood tracking, insights, and backup into one local-first self-improvement system.',
  },
  {
    q: 'Will AI features come later?',
    a: 'Possibly. AI, MCP, or backend features are only a future possibility and are not part of the app today. They would only arrive if real server/AI costs were involved, and they are not promised.',
  },
];

// --- Site pages (for nav, sitemap, llms) ------------------------------------
export const pages = [
  { path: '/', title: 'Home', nav: true },
  { path: '/features/', title: 'Features', nav: true },
  { path: '/zen-shield/', title: 'Zen Shield', nav: true },
  { path: '/habits/', title: 'Habits', nav: false },
  { path: '/journal/', title: 'Journal', nav: false },
  { path: '/insights/', title: 'Insights', nav: false },
  { path: '/backup/', title: 'Backup', nav: false },
  { path: '/privacy/', title: 'Privacy', nav: true },
  { path: '/privacy-policy/', title: 'Privacy Policy', nav: false },
  { path: '/terms/', title: 'Terms & Conditions', nav: false },
  { path: '/data-safety/', title: 'Data Safety', nav: false },
  { path: '/permissions/', title: 'Permissions', nav: false },
  { path: '/screenshots/', title: 'Screenshots', nav: true },
  { path: '/why-kaizenly/', title: 'Why KaiZenly+', nav: false },
  { path: '/use-cases/students/', title: 'For students', nav: false },
  { path: '/use-cases/professionals/', title: 'For professionals', nav: false },
  { path: '/about/', title: 'About', nav: true },
  { path: '/faq/', title: 'FAQ', nav: true },
  { path: '/download/', title: 'Download', nav: true },
];
