import { TrackInfo } from "../TrackInfo/TrackInfo";
import styles from "./footer.module.css";
import { PageStateProps, SongDataProps } from "../../types";

interface IFooterProps {
  track: SongDataProps;
  handlePlaylistOpen: (value: PageStateProps.playlist) => void;
}

export const Footer: React.FC<IFooterProps> = ({
  track,
  handlePlaylistOpen,
}) => {
  return (
    <footer>
      <button
        className="iconButton"
        onClick={() => handlePlaylistOpen(PageStateProps.playlist)}
      >
        <img src="playlist_ico.svg" alt="playlist" />
      </button>
      <div className={styles.nextSong}>
        <span className="subtitle">Next</span>
        <TrackInfo track={track} />
      </div>
    </footer>
  );
};
