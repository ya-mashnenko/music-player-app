import { TrackTitle } from "../TrackTitle/TrackTitle";
import styles from "./playlistHeader.module.css";
import { PageStateProps, SongDataProps } from "../../types";

interface IPlaylistHeaderProps {
  track: SongDataProps;
  handleMainOpen: (value: PageStateProps.main) => void;
}

export const PlaylistHeader: React.FC<IPlaylistHeaderProps> = ({
  track,
  handleMainOpen,
}) => {
  return (
    <header>
      <div className={styles.wrapper}>
        <button
          className={styles.controlButton}
          onClick={() => handleMainOpen(PageStateProps.main)}
        >
          <img src="back_ico.svg" alt="back" width={16} />
        </button>
        <TrackTitle song={track.song} artist={track.artist} variant="header" />
      </div>
      <div>
        <img src="Play_active.png" alt="more" width={"120px"} />
      </div>
    </header>
  );
};
