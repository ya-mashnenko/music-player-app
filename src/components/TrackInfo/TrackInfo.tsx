import styles from "./trackInfo.module.css";
import { TrackProps } from "../../types";

export const TrackInfo: React.FC<TrackProps> = ({ track }) => {
  return (
    <li className={`${styles.listItem} songInfo`}>
      <span>{track.song}</span>
      <span className="songInfoDots">
        ................................................
      </span>
      <span className={styles.duration}>{track.duration}</span>
    </li>
  );
};
