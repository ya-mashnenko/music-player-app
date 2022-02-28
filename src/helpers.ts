import { SongDataProps } from "./types";

export const nextSong = (
  currentSong: SongDataProps,
  trackList: SongDataProps[]
) => {
  const songIndex = trackList.findIndex(
    (track) => JSON.stringify(track) === JSON.stringify(currentSong)
  );

  if (songIndex === trackList.length - 1) {
    return trackList[0];
  }

  return trackList[songIndex + 1];
};

export const previousSong = (
  currentSong: SongDataProps,
  trackList: SongDataProps[]
) => {
  const songIndex = trackList.findIndex(
    (track) => JSON.stringify(track) === JSON.stringify(currentSong)
  );

  if (songIndex === 0) {
    return trackList[trackList.length - 1];
  }

  return trackList[songIndex - 1];
};

export const shuffleSongs = (trackList: SongDataProps[]) => {
  const arrayToSort = [...trackList];
  return arrayToSort.sort(() => Math.random() - 0.5);
};
