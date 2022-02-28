import { SongDataProps } from "../../types";
import { DiscSlider } from "../DiscSlider/DiscSlider";
import { TrackTitle } from "../TrackTitle/TrackTitle";
import { ControlPanel } from "../ControlPanel/ControlPanel";
import { TimerBar } from "../TimerBar/TimerBar";
import styles from "./player.module.css";

interface IPlayerProps {
  trackList: SongDataProps[];
  currentSong: SongDataProps;
  handleSongChange: (song: SongDataProps) => void;
}

export const Player: React.FC<IPlayerProps> = ({
  currentSong,
  trackList,
  handleSongChange,
}) => {
  return (
    <div className={styles.player}>
      <DiscSlider />
      <TrackTitle
        song={currentSong.song}
        artist={currentSong.artist}
        variant="main"
      />
      <ControlPanel
        currentSong={currentSong}
        handleSongChange={handleSongChange}
        trackList={trackList}
      />
      <TimerBar duration={currentSong.duration} />
    </div>
  );
};
