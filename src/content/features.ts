export type Feature = {
  title: string;
  blurb: string;
};

// Everything here is checked against the app's README, DESIGN.md and in-app help.
export const FEATURES: Feature[] = [
  {
    title: 'Chords or Nashville numbers',
    blurb:
      'Switch a chart between chord names and Nashville numbers. In Performance view, a Chord map reference opens from the header.',
  },
  {
    title: 'Key and capo per song',
    blurb:
      'Set a band key and a capo for each song in a setlist. The Play block shows the key to play and the capo, and the chart follows.',
  },
  {
    title: 'Edit any chart',
    blurb:
      'Drag a chord along the lyric, long-press to change it, long-press a gap to add one, and mark section headings. Show the original PDF under the editable chart.',
  },
  {
    title: 'Planning Center Services',
    blurb:
      'Connect your account, search by title or CCLI number or browse a plan, and import its PDF charts. Imports are local copies; Chorder never edits Services. Your church\u2019s subscriptions and permissions still apply.',
  },
  {
    title: 'Chord detection (experimental)',
    blurb:
      'Listens through the microphone and shows the chord it hears, with a spectrum. Audio is processed on the device and never recorded or uploaded.',
  },
  {
    title: 'Backup and restore',
    blurb:
      'Export your charts, notes, annotations, setlists and tags to a JSON file. Restore by adding copies, skipping existing songs, or replacing the library. Original PDFs and settings are not included, and the file is not encrypted.',
  },
  {
    title: 'Light and dark themes',
    blurb:
      'Built-in light and dark themes, plus a theme editor. Text is set in Atkinson Hyperlegible, with 48dp touch targets.',
  },
  {
    title: 'Screen-reader semantics',
    blurb:
      'The Play key is read first, song rows speak as one phrase, and the drag handle has Move up and Move down actions.',
  },
];
