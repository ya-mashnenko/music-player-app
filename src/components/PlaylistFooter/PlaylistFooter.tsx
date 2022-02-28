import { ShuffleButton } from "../ShuffleButton/ShuffleButton";
import styles from "./playlistFooter.module.css";

export const PlaylistFooter = () => {
  return (
    <footer className={styles.playlistFooter}>
      <ShuffleButton />
      <div className={styles.hideIcon}>
        <img src="hide_ico.svg" alt="hide" width={"30px"} />
      </div>
    </footer>
  );
};
