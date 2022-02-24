import { useState } from "react";
import { Footer } from "../components/Footer/Footer";
import { Header, IHeaderProps } from "../components/Header/Header";
import { ISongDataProps, IMusicDataProps } from "../components/Player/Player";
import styles from "./main.module.css";

export const MainPage: React.FC<IMusicDataProps> = ({ trackList }) => {
  const [currentPage, setCurrentPage] =
    useState<IHeaderProps["page"]>("playlist");
  const [currentSong, setCurrentSong] = useState<ISongDataProps>(trackList[0]);

  const nextSong = (
    currentSong: ISongDataProps,
    trackList: ISongDataProps[]
  ) => {
    const songIndex = trackList.findIndex(
      (track) => JSON.stringify(track) === JSON.stringify(currentSong)
    );
    return {
      name: trackList[songIndex + 1].song,
      duration: trackList[songIndex + 1].duration,
    };
  };
  return (
    <div className={styles.mainPage}>
      <Header page={currentPage} musicData={currentSong} />
      <Footer track={nextSong(currentSong, trackList)} />
    </div>
  );
};
