export interface SongDataProps {
  song: string;
  duration: string;
  album: string;
  artist: string;
  cover: string;
}

export interface TrackListProps {
  trackList: SongDataProps[];
}

export interface TrackProps {
  track: SongDataProps;
}

export enum PageStateProps {
  main = "MAIN",
  playlist = "PLALIST",
  menu = "MENU",
}
