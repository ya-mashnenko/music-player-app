import styles from "./timerBar.module.css";
import { useEffect, useState } from "react";
import { SongDataProps } from "../../types";
import { nextSong, songDurationInMinutes } from "../../helpers";

interface ITimeBarProps {
  isPlayActive: boolean;
  handleSongChange: (song: SongDataProps) => void;
  trackList: SongDataProps[];
  currentSong: SongDataProps;
}

export const TimerBar: React.FC<ITimeBarProps> = ({
  isPlayActive,
  handleSongChange,
  trackList,
  currentSong,
}) => {
  const [startTime, setStartTime] = useState<number>(0);

  const durationInSeconds = Number(currentSong.duration);

  const progressLength = (duration: number, progress: number) => {
    return (progress * 100) / duration;
  };

  useEffect(() => setStartTime(0), [currentSong]);

  useEffect(() => {
    let timer: number | undefined;
    if (startTime === durationInSeconds) {
      clearInterval(timer);
      setStartTime(0);
      handleSongChange(nextSong(currentSong, trackList));
      return;
    }
    if (isPlayActive) {
      timer = window.setInterval(() => {
        setStartTime(startTime + 1);
      }, 1000);
    } else if (!isPlayActive) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [startTime, isPlayActive]);

  return (
    <div style={{ width: "100%" }}>
      <div className={styles.timerBar}>
        <span>{songDurationInMinutes(startTime)}</span>
        <div className={styles.barOuter}>
          <div
            className={styles.barInner}
            style={{
              width: `${progressLength(durationInSeconds, startTime)}%`,
            }}
          />
        </div>
        <span>{songDurationInMinutes(durationInSeconds)}</span>
      </div>
    </div>
  );
};
