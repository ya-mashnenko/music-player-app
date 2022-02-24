import { TrackInfo } from "../TrackInfo/TrackInfo";
import styles from "./footer.module.css";
import { TrackProps } from "../../types";

export const Footer: React.FC<TrackProps> = ({ track }) => {
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
