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
  handleShufflePlaylist: (value: boolean) => void;
  isShuffledPlaylist: boolean;
  handleRepeat: (value: boolean) => void;
  isRepeatedSong: boolean;
}

export const MainPage: React.FC<IMainPageProps> = ({
  trackList,
  handlePageChange,
  currentSong,
  handleSongChange,
  handleShufflePlaylist,
  isShuffledPlaylist,
  handleRepeat,
  isRepeatedSong,
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
            handleShufflePlaylist={handleShufflePlaylist}
            isShuffledPlaylist={isShuffledPlaylist}
            handleRepeat={handleRepeat}
            isRepeatedSong={isRepeatedSong}
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
