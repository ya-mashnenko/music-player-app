import { TrackInfo } from "../TrackInfo/TrackInfo";
import styles from "./trackList.module.css";
import { TrackListProps } from "../../types";

export const TracksList: React.FC<TrackListProps> = ({ trackList }) => {
  return (
    <ol className={styles.trackList}>
      {trackList.map((track, index) => (
        <TrackInfo track={track} key={index} />
      ))}
    </ol>
  );
};
