export type FAQ = { q: string; a: string };

export const FAQS: FAQ[] = [
  {
    q: 'What devices does Chorder run on?',
    a: 'Android 8.0 (Oreo) or newer. It is designed for tablets on a music stand, so the layouts are built around a large screen.',
  },
  {
    q: 'Where do my charts come from?',
    a: 'You import them. Pick one or more PDF charts, open a PDF from another app, pull songs from Planning Center Services, or paste a public web page with lyrics or chords. Each import opens in a review step before it is saved. Scanned PDFs are read with on-device text recognition.',
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
    a: 'Open Settings > Library and choose Export backup. You get one JSON file, saved wherever you pick with Android\u2019s file picker, including a document provider such as Google Drive. It holds your charts, edits, notes, annotations, tags and setlists. To restore, add the songs as copies, skip songs you already have, or replace the library, which asks you to confirm. Original PDFs and app settings are not included, and the file is not encrypted.',
  },
  {
    q: 'Does it work with a screen reader?',
    a: 'Chorder has TalkBack support. Chords are spoken as names, so F#m7/A is read as \u201cF sharp m7 over A\u201d, followed by the lyric. Setlist rows can be reordered with Move up and Move down actions as well as by dragging.',
  },
  {
    q: 'How much does Chorder cost?',
    a: 'The Google Play listing shows the current price. Chorder has no account, advertising or analytics.',
  },
  {
    q: 'What about my privacy?',
    a: 'There is no account, advertising or analytics. Microphone audio used for chord detection, which is experimental, is processed on the device and is never recorded or uploaded. The privacy policy has the details.',
  },
];
