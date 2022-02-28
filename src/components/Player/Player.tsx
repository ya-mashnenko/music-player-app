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
  handleShufflePlaylist: (value: boolean) => void;
  isShuffledPlaylist: boolean;
  handleRepeat: (value: boolean) => void;
  isRepeatedSong: boolean;
}

export const Player: React.FC<IPlayerProps> = ({
  currentSong,
  trackList,
  handleSongChange,
  handleShufflePlaylist,
  isShuffledPlaylist,
  handleRepeat,
  isRepeatedSong,
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
        handleShufflePlaylist={handleShufflePlaylist}
        isShuffledPlaylist={isShuffledPlaylist}
        handleRepeat={handleRepeat}
        isRepeatedSong={isRepeatedSong}
      />
      <TimerBar duration={currentSong.duration} />
    </div>
  );
};
