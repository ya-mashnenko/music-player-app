import { ShuffleButton } from "../ShuffleButton/ShuffleButton";
import styles from "./playlistFooter.module.css";

interface IPlaylistFooterProps {
  handleShufflePlaylist: (value: boolean) => void;
  isShuffledPlaylist: boolean;
}

export const PlaylistFooter: React.FC<IPlaylistFooterProps> = ({
  handleShufflePlaylist,
  isShuffledPlaylist,
}) => {
  return (
    <footer className={styles.playlistFooter}>
      <ShuffleButton
        handleShufflePlaylist={handleShufflePlaylist}
        isShuffledPlaylist={isShuffledPlaylist}
      />
      <div className={styles.hideIcon}>
        <img src="hide_ico.svg" alt="hide" width={"30px"} />
      </div>
    </footer>
  );
};
