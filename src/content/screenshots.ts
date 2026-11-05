export type ShotId =
  | 'library'
  | 'setlist-detail'
  | 'setlist-editor'
  | 'chart-short'
  | 'chart-long'
  | 'performance-single'
  | 'performance-setlist'
  | 'detect'
  | 'planning-center'
  | 'settings-themes';

export type Shot = {
  /** File stem in public/images/app/: `{id}-{theme}-{width}.webp` */
  id: ShotId;
  /** Intrinsic size of the 1600px variant. */
  width: number;
  height: number;
  alt: string;
};

// Every shot exists in light and dark at 1600w and 800w. Alt text describes what is on screen.
export const SHOTS: Record<ShotId, Shot> = {
  'performance-single': {
    id: 'performance-single',
    width: 1600,
    height: 1000,
    alt: 'Chorder Performance view for Amazing Grace on a tablet. A brass block at the top right reads Play G, Capo 3. Below it, chords sit in brass above large lyrics under the heading Verse 1.',
  },
  'performance-setlist': {
    id: 'performance-setlist',
    width: 1600,
    height: 1000,
    alt: 'Chorder Performance view for Doxology, song 1 of 5 in a setlist. The header shows Previous and Next buttons, a Next: Be Thou My Vision hint with its key, Notes and Chord map toggles, and a Play G block.',
  },
  library: {
    id: 'library',
    width: 1600,
    height: 1000,
    alt: 'Chorder Library with Search, Import and Tags tabs. A search field and tag filters sit above a list of ten charts. Each row starts with a brass tile showing the song key, then the title, artist and tags.',
  },
  'setlist-detail': {
    id: 'setlist-detail',
    width: 1600,
    height: 1000,
    alt: 'Chorder setlist for Sunday morning service with five songs. A key flow line reads G, C, D, E, B flat. Numbered rows show each song with its key tile, capo and band key, and buttons for Performance view and Edit.',
  },
  'setlist-editor': {
    id: 'setlist-editor',
    width: 1600,
    height: 1000,
    alt: 'Chorder setlist editor. Each song row has a drag handle, a number, a key tile, an optional note such as Count in 4, and an overflow menu. Buttons at the top add a song, open Performance view or delete the setlist.',
  },
  'chart-short': {
    id: 'chart-short',
    width: 1600,
    height: 1000,
    alt: 'Chorder chart view for Doxology. The header shows artist, tempo and time signature, a Chords and Nashville toggle, and a Play G block. The chart fills the card with brass chords above monospace lyrics.',
  },
  'chart-long': {
    id: 'chart-long',
    width: 1600,
    height: 1000,
    alt: 'Chorder chart view for Amazing Grace. The chart text is scaled up to fill the card, with brass chords above monospace lyrics under the heading Verse 1.',
  },
  detect: {
    id: 'detect',
    width: 1600,
    height: 325,
    alt: 'Chorder chord detection panel. A key selector with Major and Minor, the detected chord G in brass, and a row of brass bars showing the audio spectrum.',
  },
  'planning-center': {
    id: 'planning-center',
    width: 1600,
    height: 1000,
    alt: 'Chorder Services import connected to Planning Center. Tabs for Search songs and Browse plans, a field for song title or CCLI number, and a list of songs that have PDFs. A note says imports are local copies.',
  },
  'settings-themes': {
    id: 'settings-themes',
    width: 1600,
    height: 1000,
    alt: 'Chorder Settings on the Appearance tab, with Performance, Appearance, Library and Help tabs. A list of themes (System, Chorder Dark, Chorder Light and two custom copies) sits beside a theme editor with a preview of chords in brass above the lyric Amazing grace how sweet the sound.',
  },
};
