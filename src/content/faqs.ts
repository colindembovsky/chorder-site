export type FAQ = { q: string; a: string };

export const FAQS: FAQ[] = [
  {
    q: 'What devices does Chorder run on?',
    a: 'Chorder runs on Android phones and tablets running Android 8.0 (Oreo) or newer. It is optimized for tablet-size screens on a music stand.',
  },
  {
    q: 'Does Chorder need an internet connection?',
    a: 'No. Chorder works entirely on your device. There is no account, no cloud sync, and your charts, library, and microphone audio never leave your device.',
  },
  {
    q: 'How does PDF import work?',
    a: 'Pick one or more PDFs and Chorder parses chord and lyric structure into editable charts. Text-based PDFs are read directly; scanned PDFs are processed on-device using Android ML Kit OCR.',
  },
  {
    q: 'How accurate is the OCR for scanned charts?',
    a: 'On clean, high-resolution scans it works well. Messy scans may need a quick pass through the chart editor — drag chords over lyrics, tweak meta, and you are good to play.',
  },
  {
    q: 'Can I transpose songs and use a capo?',
    a: 'Yes. Set a band key and a target key per song, with capo-aware display. Switch between chord names and Nashville numbers with one tap.',
  },
  {
    q: 'How much does Chorder cost?',
    a: 'Chorder is currently in prototype and not yet listed on the Play Store. Pricing will be announced ahead of public launch.',
  },
  {
    q: 'What about my privacy?',
    a: 'Chorder has no advertising, no analytics, and no telemetry. Microphone audio used for live chord detection is processed on-device and is never recorded or uploaded.',
  },
];
