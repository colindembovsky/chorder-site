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
    a: 'Pick one or more PDFs and Chorder parses them into editable charts. From there you can edit the chart in Chorder — drag chords over lyrics, fix labels, add sections, tweak meta — to make it truly yours.',
  },
  {
    q: 'Can I edit a chart after I import it?',
    a: 'Yes. Every imported chart is fully editable in Chorder. Reposition chords, adjust lyrics, rename sections, set the key and capo — your changes are saved with the song.',
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
