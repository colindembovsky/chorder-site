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
      'Set a band key, target key and capo for each song in a setlist. Library, setlist and chart rows lead with the key, and the Play block shows the key to play and the capo.',
  },
  {
    title: 'Edit any chart',
    blurb:
      'Drag a chord along the lyric, long-press to change it, long-press a gap to add one, and mark section headings. Show the original PDF under the editable chart.',
  },
  {
    title: 'Reorder setlists by drag',
    blurb:
      'Drag the grip on a setlist row to reorder it. Move up and Move down are also in the row menu and as screen-reader actions on the grip.',
  },
  {
    title: 'Page-turn buttons',
    blurb:
      'Step through a long chart in Performance view with the Page up and Page down buttons. In Settings, choose Full page, where every page starts on a new line, or Keep screen full, where the last page stops at the end of the song and repeats some lines from the one before.',
  },
  {
    title: 'Library tools',
    blurb:
      'Sort alphabetically or by import date, ascending or descending. Select songs to add them to a new setlist in the order you picked. Manage tags in one place.',
  },
  {
    title: 'Imports and duplicates',
    blurb:
      'When a PDF or Planning Center song is already in the Library, choose Overwrite, Create copy or Skip, and apply it to every remaining duplicate. You can also open a PDF in Chorder from another app.',
  },
  {
    title: 'Planning Center Services',
    blurb:
      'Connect your account, search by title or CCLI number or browse a plan, and import its PDF charts. Imports are local copies; Chorder never edits Services. Your church\u2019s subscriptions and permissions still apply.',
  },
  {
    title: 'Backup and restore',
    blurb:
      'In Settings > Library, export your charts, edits, notes, annotations, tags and setlists to one JSON file. Restore by adding copies (the default), skipping songs you already have, or replacing the library, which asks you to confirm. An invalid or failed restore leaves the library unchanged. Original PDFs and settings are not included, and the file is not encrypted.',
  },
  {
    title: 'Settings in four tabs',
    blurb:
      'Performance for page turns, Appearance for themes, Library for backup and Planning Center, and Help for tips, the in-app Help screen, rating and sharing.',
  },
  {
    title: 'Light, dark and your own themes',
    blurb:
      'Choose Chorder Light, Chorder Dark, or System to match the device. Copy a theme to change its menu, chart and chord colours. Text is set in Atkinson Hyperlegible, with 48dp touch targets.',
  },
  {
    title: 'Help, tips and a sample chart',
    blurb:
      'Short tips appear once, the first time you reach a feature, and can be turned off or shown again. Help covers each area, and a bundled public-domain sample chart, Amazing Grace, lets you try the app before importing anything.',
  },
  {
    title: 'Chord detection (experimental)',
    blurb:
      'Listens through the microphone and shows the chord it hears, with a spectrum. Audio is processed on the device and never recorded or uploaded.',
  },
  {
    title: 'Screen-reader support',
    blurb:
      'The Play key is read first and song rows speak as one phrase. Chords are spoken as names, so F#m7/A is read as \u201cF sharp m7 over A\u201d, followed by the lyric.',
  },
];
