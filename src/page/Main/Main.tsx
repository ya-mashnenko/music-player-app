import { useState } from "react";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import styles from "./main.module.css";
import { PageStateProps, SongDataProps, TrackListProps } from "../../types";
import { MenuPage } from "../ViewMore/ViewMore";
import { PlaylistFooter } from "../../components/PlaylistFooter/PlaylistFooter";
import { PlaylistHeader } from "../../components/PlaylistHeader/PlaylistHeader";
import { Player } from "../../components/Player/Player";
import { TracksList } from "../../components/TracksList/TracksList";

export const MainPage: React.FC<TrackListProps> = ({ trackList }) => {
  const [currentPage, setCurrentPage] = useState<PageStateProps>(
    PageStateProps.main
  );
  const [currentSong, setCurrentSong] = useState<SongDataProps>(trackList[0]);

  const nextSong = (currentSong: SongDataProps, trackList: SongDataProps[]) => {
    const songIndex = trackList.findIndex(
      (track) => JSON.stringify(track) === JSON.stringify(currentSong)
    );
    return trackList[songIndex + 1];
  };

  const renderMain = (currentPage: PageStateProps) => {
    switch (currentPage) {
      case PageStateProps.main:
        return <Player track={currentSong} />;
      case PageStateProps.menu:
        return <MenuPage track={currentSong} />;
      case PageStateProps.playlist:
        return <TracksList trackList={trackList} />;
    }
  };

  return (
    <div className={styles.mainPage}>
      {currentPage === PageStateProps.playlist ? (
        <PlaylistHeader track={currentSong} handleMainOpen={setCurrentPage} />
      ) : (
        <Header
          currentPage={currentPage}
          musicData={currentSong}
          handleMenuOpen={setCurrentPage}
        />
      )}
      {renderMain(currentPage)}
      {currentPage === PageStateProps.playlist ? (
        <PlaylistFooter />
      ) : (
        <Footer
          track={nextSong(currentSong, trackList)}
          handlePlaylistOpen={setCurrentPage}
        />
      )}
    </div>
  );
};
