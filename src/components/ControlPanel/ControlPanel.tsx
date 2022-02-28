import { useState } from "react";
import { nextSong, previousSong, shuffleSongs } from "../../helpers";
import { SongDataProps, TrackListProps } from "../../types";
import styles from "./controlPanel.module.css";

interface IControlPanelProps {
  trackList: SongDataProps[];
  currentSong: SongDataProps;
  handleSongChange: (song: SongDataProps) => void;
}

export const ControlPanel: React.FC<IControlPanelProps> = ({
  trackList,
  currentSong,
  handleSongChange,
}) => {
  const [isPlayActive, setIsPlayActive] = useState<boolean>(false);
  return (
    <div className={styles.controlPanel}>
      <button
        className={styles.controlButton}
        onClick={() => shuffleSongs(trackList)}
      >
        <img src="shuffle_ico.svg" alt="shuffle" />
      </button>
      <button
        className={styles.controlButton}
        onClick={() => handleSongChange(previousSong(currentSong, trackList))}
      >
        <img src="previous_ico.svg" alt="previous" />
      </button>
      <button
        className={styles.controlButton}
        style={{ width: "250px" }}
        onClick={() => setIsPlayActive(!isPlayActive)}
      >
        {isPlayActive ? (
          <img src="Play_active.png" alt="play" width="250px" />
        ) : (
          <div className={styles.inactibeButtonWrapper}>
            <img src="Play_inactive.png" alt="play" width="150px" />
          </div>
        )}
      </button>
      <button
        className={styles.controlButton}
        onClick={() => handleSongChange(nextSong(currentSong, trackList))}
      >
        <img src="next_ico.svg" alt="next" />
      </button>
      <button className={styles.controlButton}>
        <img src="repeat_ico.svg" alt="repeat" />
      </button>
    </div>
  );
};
