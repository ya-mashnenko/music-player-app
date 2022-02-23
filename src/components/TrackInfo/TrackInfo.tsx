import styles from "./trackInfo.module.css";

export interface ITrackProps {
  track: { name: string; duration: string };
}

export const TrackInfo: React.FC<ITrackProps> = ({ track }) => {
  return (
    <li className={`${styles.listItem} songInfo`}>
      <span>{track.name}</span>
      <span className="songInfoDots">
        ................................................
      </span>
      <span>{track.duration}</span>
    </li>
  );
};
