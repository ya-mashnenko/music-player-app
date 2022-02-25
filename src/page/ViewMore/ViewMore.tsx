import { TrackTitle } from "../../components/TrackTitle/TrackTitle";
import styles from "./viewMore.module.css";
import { TrackProps } from "../../types";

export const MenuPage: React.FC<TrackProps> = ({ track: currentSong }) => {
  return (
    <div className={styles.viewMorePage}>
      <main>
        <div className={styles.cover}>
          <img src={currentSong.cover} alt="cover" width={"180px"} />
        </div>
        <TrackTitle
          song={currentSong.song}
          artist={currentSong.artist}
          variant="main"
        />
        <img src={"more_ico.svg"} alt="more" className={styles.divider} />
        <div className={styles.buttonGroup}>
          <button className={styles.buttonLink}>Add to playlist</button>
          <button className={styles.buttonLink}>Show album</button>
          <button className={styles.buttonLink}>Share with friends</button>
        </div>
      </main>
    </div>
  );
};
