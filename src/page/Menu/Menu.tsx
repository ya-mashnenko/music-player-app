import { TrackTitle } from "../../components/TrackTitle/TrackTitle";
import styles from "./menu.module.css";
import { PageStateProps, SongDataProps } from "../../types";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { MenuButtonSet } from "../../components/MenuButtonSet/MenuButtonSet";

interface IMenuPageProps {
  currentSong: SongDataProps;
  nextSong: SongDataProps;
  handlePageChange: (page: PageStateProps) => void;
}

export const MenuPage: React.FC<IMenuPageProps> = ({
  currentSong,
  nextSong,
  handlePageChange,
}) => {
  return (
    <div className={styles.menuPage}>
      <Header
        currentPage={PageStateProps.menu}
        musicData={currentSong}
        handleMenuOpen={handlePageChange}
      />
      <div className={styles.menuMainWrap}>
        <div className={styles.cover}>
          <img src={currentSong.cover} alt="cover" width={"180px"} />
        </div>
        <TrackTitle
          song={currentSong.song}
          artist={currentSong.artist}
          variant="main"
        />
        <img src={"more_ico.svg"} alt="more" className={styles.divider} />
        <MenuButtonSet />
      </div>
      <Footer track={nextSong} handlePlaylistOpen={handlePageChange} />
    </div>
  );
};
