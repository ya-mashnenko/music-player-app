import styles from "./trackTitle.module.css";

interface ITrackTitleProps {
  song: string;
  artist: string;
  variant: "header" | "main";
}

export const TrackTitle: React.FC<ITrackTitleProps> = ({
  song,
  artist,
  variant,
}) => {
  return (
    <div
      className={`${
        variant === "main" ? styles.mainStyle : styles.headerStyle
      } ${styles.trackTitle}`}
    >
      <span className="title">{song}</span>
      <span className="subtitle">{artist}</span>
    </div>
  );
};
