export type Feature = {
  title: string;
  blurb: string;
  icon: string; // lucide icon name
};

export const FEATURES: Feature[] = [
  {
    title: 'Import & Edit',
    blurb:
      'Drop in PDFs and Chorder turns them into editable charts. Drag chords, fix lyrics, tweak meta — make every chart truly yours.',
    icon: 'file-text',
  },
  {
    title: 'Searchable Library',
    blurb:
      'Find any chart in seconds by title, artist, key, lyric, or tag. Group songs by service, team, season, or style.',
    icon: 'library',
  },
  {
    title: 'Nashville Numbers',
    blurb:
      'One tap toggles between chord names and Nashville numbers. Transpose to any key — capo-aware, every time.',
    icon: 'hash',
  },
  {
    title: 'Setlists',
    blurb:
      'Build a setlist in seconds. Reorder songs, override key and capo per song, add performance notes.',
    icon: 'list-ordered',
  },
  {
    title: 'Performance View',
    blurb:
      'A clean, distraction-free, full-screen live view. Quick prev/next, controls overlay, Nashville reference at a glance.',
    icon: 'play-circle',
  },
  {
    title: 'Live Chord Detection',
    blurb:
      'Experimental: Chorder listens through the mic and identifies what is being played, in real time, on stage.',
    icon: 'mic',
  },
];
