import { ITrackProps, TrackInfo } from "../TrackInfo/TrackInfo";
import styles from "./footer.module.css";

export const Footer: React.FC<ITrackProps> = ({ track }) => {
  return (
    <footer>
      <button className="iconButton">
        <img src="playlist_ico.svg" alt="playlist" />
      </button>
      <div className={styles.nextSong}>
        <span className="subtitle">Next</span>
        <TrackInfo track={track} />
      </div>
    </footer>
  );
};
