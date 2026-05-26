export type Screenshot = {
  file: string; // filename inside public/images/screenshots/
  caption: string;
  feature: string;
  theme: 'dark' | 'light';
};

// Order matches §6.5.2 of the research report — most compelling first.
export const SCREENSHOTS: Screenshot[] = [
  {
    file: 'chorder-performance-view.png',
    caption:
      'Play confidently in any key — Nashville numbers and real-time transposition, right on stage.',
    feature: 'Performance View',
    theme: 'dark',
  },
  {
    file: 'chorder-detect.png',
    caption:
      'Never lose your place — live chord detection identifies what is being played, automatically.',
    feature: 'Live Chord Detection (experimental)',
    theme: 'dark',
  },
  {
    file: 'chorder-library.png',
    caption: 'Your entire song catalog — searchable, taggable, instantly accessible.',
    feature: 'Library',
    theme: 'dark',
  },
  {
    file: 'chorder-set-lists.png',
    caption: 'Build Sunday\u2019s set in seconds and launch straight into performance.',
    feature: 'Setlists',
    theme: 'light',
  },
  {
    file: 'chorder-view-chart.png',
    caption: 'Clean, readable chord charts — exactly how you need them.',
    feature: 'Chart View',
    theme: 'light',
  },
  {
    file: 'chorder-edit-chart.png',
    caption: 'Import any PDF chart and fine-tune it — your edits, alongside the original.',
    feature: 'Chart Editing',
    theme: 'dark',
  },
  {
    file: 'chorder-themes.png',
    caption: 'Make it yours — built-in themes or a custom look for your stage.',
    feature: 'Themes',
    theme: 'light',
  },
  {
    file: 'chorder-song-meta.png',
    caption: 'Key, tempo, tags, time signature — every detail organized your way.',
    feature: 'Song Metadata',
    theme: 'light',
  },
];
