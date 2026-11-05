export type FAQ = { q: string; a: string };

export const FAQS: FAQ[] = [
  {
    q: 'What devices does Chorder run on?',
    a: 'Android 8.0 (Oreo) or newer. It is designed for tablets on a music stand, so the layouts are built around a large screen.',
  },
  {
    q: 'Where do my charts come from?',
    a: 'You import them. Pick one or more PDF charts, pull songs from Planning Center Services, or paste a public web page with lyrics or chords. Each import opens in a review step before it is saved. Scanned PDFs are read with on-device text recognition.',
  },
  {
    q: 'Can I edit a chart after I import it?',
    a: 'Yes. Every chart is editable. Drag chords along the lyric, change or add chords, mark section headings, and edit the name, author, key, tempo, time signature and tags.',
  },
  {
    q: 'Can I transpose songs and use a capo?',
    a: 'Yes. In a setlist, each song has its own target key and capo, and the Play block shows the key to play. A chart can be shown with chord names or Nashville numbers.',
  },
  {
    q: 'Does it work without an internet connection?',
    a: 'Your library, setlists and Performance view are stored on the device and work offline, with no account. The internet is used when you import from Planning Center or from a web page.',
  },
  {
    q: 'How do I back up my library?',
    a: 'Export a backup from Settings. It is a JSON file with your charts, notes, annotations, setlists and tags. Original PDFs and settings are not included, and the file is not encrypted.',
  },
  {
    q: 'How much does Chorder cost?',
    a: 'Chorder is in beta and not yet listed on Google Play. Pricing will be announced before public launch.',
  },
  {
    q: 'What about my privacy?',
    a: 'There is no account, advertising or analytics. Microphone audio used for chord detection, which is experimental, is processed on the device and is never recorded or uploaded. The privacy policy has the details.',
  },
];
