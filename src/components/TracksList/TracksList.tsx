import { ITrackProps, TrackInfo } from "../TrackInfo/TrackInfo";
import styles from "./trackList.module.css";

interface ITracksListProps {
  tracks: ITrackProps["track"][];
}

export const TracksList: React.FC<ITracksListProps> = ({ tracks }) => {
  return (
    <ol className={styles.trackList}>
      {tracks.map((track, index) => (
        <TrackInfo track={track} key={index} />
      ))}
    </ol>
  );
};
