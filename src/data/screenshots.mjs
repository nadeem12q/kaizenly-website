// ---------------------------------------------------------------------------
// Screenshot library — categorised by the ACTUAL on-screen content of each file.
//
// NOTE: the raw filenames are NOT reliable (several were shuffled/mislabelled
// when the library was captured). Every entry below was verified by visually
// inspecting the image, so `file` names may not match their alt text — that is
// expected. Do not "fix" a name to match its alt; the alt describes the truth.
//
// Privacy handling:
//  - 46 & 47 contained a visible Google account email -> shipped as MASKED copies.
//  - 48 (Drive restore progress) also showed the email and is intentionally EXCLUDED.
//
// Files intentionally NOT published (duplicates / near-identical variants):
//  17, 22, 23, 26, 28, 32, 34.
// ---------------------------------------------------------------------------

export const categories = [
  {
    id: 'onboarding',
    title: 'Onboarding & permissions',
    blurb:
      'A calm first run: a welcome, a goal picker, and step-by-step permission screens that each explain why they are asked.',
    shots: [
      { file: '01_onboarding_welcome.webp', alt: 'KaiZenly+ welcome screen with a serif headline about rest and a line illustration', theme: 'dark' },
      { file: '02_onboarding_goals_picker_empty.webp', alt: 'Goal picker — "Pick up to 3 goals" with Deep focus, Study more, Less scrolling and Reflect daily, none selected', theme: 'dark' },
      { file: '03_onboarding_goals_selected.webp', alt: 'Goal picker with three goals selected and the Continue button enabled', theme: 'dark' },
      { file: '04_onboarding_permissions_step1_usage.webp', alt: 'Permission step 1 of 8 — App Usage, explaining it detects opened apps locally during focus', theme: 'dark' },
      { file: '05_onboarding_permissions_step2_accessibility.webp', alt: 'Permission step 2 of 8 — Accessibility, used only during focus to catch bypass attempts', theme: 'dark' },
      { file: '16_focus_setup_light_no_apps.webp', alt: 'Permission step 5 of 7 — Call Safety', theme: 'dark' },
      { file: '31_onboarding_step5_call_safety.webp', alt: 'Permission step 6 of 7 — Notifications, keeping a focus session visible and reminders on time', theme: 'dark' },
      { file: '06_onboarding_permissions_step8_battery.webp', alt: 'Permission step 8 of 8 — Battery, so focus timers and reminders keep running reliably', theme: 'dark' },
    ],
  },
  {
    id: 'habits',
    title: 'Habits',
    blurb:
      'Daily habits with a greeting, a week strip, progress, reminders, and per-habit analytics — for Task and Count habit types.',
    shots: [
      { file: '43_habits_list_progress_light.webp', alt: 'Habits dashboard with a greeting, a calendar strip and three habits with progress bars', theme: 'light' },
      { file: '07_habits_empty_state.webp', alt: 'Empty habits screen with a sprout illustration and "No habits yet"', theme: 'dark' },
      { file: '09_habits_with_one_habit.webp', alt: 'Habits list with a single habit, Morning meditation, not done yet', theme: 'dark' },
      { file: '08_habit_create_sheet.webp', alt: 'New Habit bottom sheet with a Task type and a daily repeat', theme: 'dark' },
      { file: '25_habit_create_count_dark.webp', alt: 'New Habit sheet, Count type, Drink Water with a target of ten times', theme: 'dark' },
      { file: '24_habit_reminder_picker_dark.webp', alt: 'Habit reminder time picker with a clock face', theme: 'dark' },
      { file: '18_habit_detail_water_light.webp', alt: 'Water habit detail with an overview score, history chart, calendar and streaks', theme: 'light' },
      { file: '27_habit_detail_count_dark.webp', alt: 'Count habit detail showing ten of ten times and full stats', theme: 'dark' },
    ],
  },
  {
    id: 'focus',
    title: 'Zen Shield & Focus',
    blurb:
      'Focus session setup, allowed apps, a running session, the parachute exit, the protected wall, and a calm completion.',
    shots: [
      { file: '42_focus_setup_light_full.webp', alt: 'Focus setup with the timer, preset durations, a Start button and an allowed apps card', theme: 'light' },
      { file: '15_focus_setup_light_whatsapp.webp', alt: 'Focus setup with a 25 minute timer and WhatsApp allowed', theme: 'light' },
      { file: '19_focus_setup_dark_3_3.webp', alt: 'Focus setup in dark theme with three of three parachutes', theme: 'dark' },
      { file: '35_scheduled_tasks_with_bedtime.webp', alt: 'Focus home with allowed apps, scheduled tasks and focus insights cards before any session', theme: 'light' },
      { file: '20_focus_allowed_apps_picker.webp', alt: 'Allowed apps picker with WhatsApp, Phone and SMS', theme: 'dark' },
      { file: '40_focus_session_pomodoro_whatsapp.webp', alt: 'Running Pomodoro focus session, 24:51 remaining, WhatsApp allowed', theme: 'dark' },
      { file: '53_focus_session_light_whatsapp.webp', alt: 'Running Pomodoro focus session in light theme with WhatsApp allowed', theme: 'light' },
      { file: '41_focus_scheduled_with_bedtime_dark.webp', alt: 'Running Custom focus session with fifty-five seconds remaining', theme: 'dark' },
      { file: '38_focus_protected_wall.webp', alt: 'Before you leave — take a parachute to safely exit a focus session early', theme: 'dark' },
      { file: '54_focus_protected_wall_light.webp', alt: 'Focus Protected wall with a shield and a Continue Focusing button', theme: 'dark' },
      { file: '39_focus_complete_celebration.webp', alt: 'Focus complete celebration with confetti and a View Insights button', theme: 'dark' },
    ],
  },
  {
    id: 'scheduled',
    title: 'Scheduled focus & Bedtime',
    blurb:
      'Auto-start focus windows and a bedtime mode that turns on Zen Shield during your sleep hours.',
    shots: [
      { file: '12_insights_filled_light_scroll.webp', alt: 'Scheduled tasks with a morning Focus Window and a Bedtime Mode configured', theme: 'light' },
      { file: '37_focus_session_running_00_55.webp', alt: 'Scheduled tasks with two active windows, a morning session and bedtime mode, in dark theme', theme: 'dark' },
      { file: '36_focus_window_form_light.webp', alt: 'Focus Window form for a morning session from five to nine, Monday to Sunday', theme: 'light' },
      { file: '21_scheduled_tasks_empty_dark.webp', alt: 'Empty scheduled tasks screen with Add Focus Schedule and Add Bedtime Mode', theme: 'dark' },
    ],
  },
  {
    id: 'journal',
    title: 'Journal & Mood',
    blurb:
      'Mood-aware journaling with a quick mood picker, tags, prompt templates, and a calm empty state.',
    shots: [
      { file: '29_journal_filled_light.webp', alt: 'Journal with a Great mood entry and tags', theme: 'light' },
      { file: '30_journal_template_gratitude.webp', alt: 'Gratitude journal template with guided prompts', theme: 'dark' },
      { file: '10_journal_empty_state.webp', alt: 'Empty journal with a mood picker and the prompt "Start with one honest line"', theme: 'dark' },
    ],
  },
  {
    id: 'insights',
    title: 'Insights',
    blurb:
      'On-device analytics: a mood trend, a mood donut, habit comparison bars, and stat tiles.',
    shots: [
      { file: '52_insights_filled_light_clean.webp', alt: 'Insights with a mood trend and stat tiles, five point zero average mood', theme: 'light' },
      { file: '13_insights_empty_dark.webp', alt: 'Insights with a weekly mood trend and a mood-level donut chart in light theme', theme: 'light' },
      { file: '14_insights_filled_dark.webp', alt: 'Insights with a mood-level donut chart in dark theme', theme: 'dark' },
      { file: '50_insights_habits_comparison_dark.webp', alt: 'Insights habit comparison bars for four habits in dark theme', theme: 'dark' },
      { file: '11_insights_empty_light.webp', alt: 'Insights with stat tiles and an activity summary in light theme', theme: 'light' },
      { file: '33_onboarding_step7_battery.webp', alt: 'Empty insights with a "No insights yet" message in dark theme', theme: 'dark' },
    ],
  },
  {
    id: 'backup',
    title: 'Backup & Privacy',
    blurb:
      'Encrypted local backup and optional Google Drive backup, fully controlled by you. (Account email masked for privacy.)',
    shots: [
      { file: '51_create_full_backup_dialog_light.webp', alt: 'Create full backup dialog with password, confirm and optional hint fields', theme: 'light' },
      { file: '46_local_backup_screen_dark.webp', alt: 'Encrypted backup screen with export, import and Google Drive options (account email masked)', theme: 'dark', masked: true },
      { file: '45_google_drive_connect_dialog.webp', alt: 'Connect Google Drive passphrase dialog', theme: 'dark' },
      { file: '47_drive_backup_progress.webp', alt: 'Backing up to Google Drive progress dialog (account email masked)', theme: 'dark', masked: true },
      { file: '49_replace_data_confirm.webp', alt: 'Replace local data confirmation dialog with backup data counts', theme: 'dark' },
    ],
  },
  {
    id: 'settings',
    title: 'Settings',
    blurb: 'A local settings center for theme, parachutes, backup, permissions, and about.',
    shots: [
      { file: '44_settings_full_dark.webp', alt: 'Full settings screen with parachutes, theme, encrypted backup and permissions', theme: 'dark' },
    ],
  },
  {
    id: 'widget',
    title: 'Home-screen widget',
    blurb: 'Check off today’s habits straight from your Android home screen.',
    shots: [
      { file: '55_home_widget_habits.webp', alt: 'Home screen Today’s habits glance widget with four habits done', theme: 'dark' },
    ],
  },
];

// Files that need a generated masked copy (email removed). Mask geometry is
// tuned in scripts/process-screenshots.mjs.
export const maskedFiles = ['46_local_backup_screen_dark.webp', '47_drive_backup_progress.webp'];

// Explicitly excluded for privacy (kept only in _raw_screens, never published).
export const excludedFiles = ['48_drive_restore_progress.webp'];

// Hero rotation on the homepage — the strongest, most "premium" shots.
export const heroShots = [
  { file: '43_habits_list_progress_light.webp', alt: 'KaiZenly+ habits dashboard with progress' },
  { file: '52_insights_filled_light_clean.webp', alt: 'KaiZenly+ insights with a mood trend and stat tiles' },
  { file: '54_focus_protected_wall_light.webp', alt: 'KaiZenly+ Focus Protected wall' },
];

// Flat helper: every published file (for copy + sanity checks).
export function allPublishedFiles() {
  const set = new Set();
  for (const c of categories) for (const s of c.shots) set.add(s.file);
  return [...set];
}
