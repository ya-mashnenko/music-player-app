import { useState } from "react";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import styles from "./main.module.css";
import { PageStateProps, SongDataProps } from "../../types";

import { Player } from "../../components/Player/Player";
import { nextSong } from "../../helpers";

interface IMainPageProps {
  trackList: SongDataProps[];
  handlePageChange: (page: PageStateProps) => void;
  currentSong: SongDataProps;
  handleSongChange: (song: SongDataProps) => void;
}

export const MainPage: React.FC<IMainPageProps> = ({
  trackList,
  handlePageChange,
  currentSong,
  handleSongChange,
}) => {
  return (
    <div className={styles.mainPage}>
      <div className={styles.gradientLayer}>
        <Header
          currentPage={PageStateProps.main}
          musicData={currentSong}
          handleMenuOpen={handlePageChange}
        />
        <main>
          <Player
            currentSong={currentSong}
            handleSongChange={handleSongChange}
            trackList={trackList}
          />
        </main>
        <Footer
          track={nextSong(currentSong, trackList)}
          handlePlaylistOpen={handlePageChange}
        />
      </div>
    </div>
  );
};
