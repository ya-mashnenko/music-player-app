import styles from "./trackList.module.css";

interface ITracksListProps {
  tracks: { name: string; duration: string }[];
}

export const TracksList: React.FC<ITracksListProps> = ({ tracks }) => {
  return (
    <ol className={styles.trackList}>
      {tracks.map((track) => (
        <li className={styles.listItem}>
          <span>{track.name}</span>
          <span className={styles.listItemDots}>
            ................................................
          </span>
          <span>{track.duration}</span>
        </li>
      ))}
    </ol>
  );
};
