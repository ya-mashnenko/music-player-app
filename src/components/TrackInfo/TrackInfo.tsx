import styles from "./trackInfo.module.css";
import { TrackProps } from "../../types";
import { songDurationInMinutes } from "../../helpers";

export const TrackInfo: React.FC<TrackProps> = ({ track }) => {
  return (
    <li className={`${styles.listItem} songInfo`}>
      <span>{track.song}</span>
      <span className="songInfoDots">
        ................................................
      </span>
      <span className={styles.duration}>
        {songDurationInMinutes(Number(track.duration))}
      </span>
    </li>
  );
};
