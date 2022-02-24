import { useState } from "react";
import { Footer } from "../Footer/Footer";
import { Header, IHeaderProps } from "../Header/Header";
import { SongDataProps, TrackListProps } from "../../types";

export const Player: React.FC<TrackListProps> = ({ trackList }) => {
  const [currentPage, setCurrentPage] =
    useState<IHeaderProps["page"]>("playlist");
  const [currentSong, setCurrentSong] = useState<SongDataProps>(trackList[0]);
  const nextSong = (currentSong: SongDataProps, trackList: SongDataProps[]) => {
    const songIndex = trackList.findIndex(
      (track) => JSON.stringify(track) === JSON.stringify(currentSong)
    );
    return trackList[songIndex + 1];
  };
  return (
    <>
      <Header page={currentPage} musicData={currentSong} />
      <Footer track={nextSong(currentSong, trackList)} />
    </>
  );
};
