import { SongDataProps } from "../../types";
import { DiscSlider } from "../DiscSlider/DiscSlider";
import { TrackTitle } from "../TrackTitle/TrackTitle";
import { ControlPanel } from "../ControlPanel/ControlPanel";
import { TimerBar } from "../TimerBar/TimerBar";
import styles from "./player.module.css";
import { useEffect, useState } from "react";
import { nextSong, previousSong } from "../../helpers";

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
  const [isPlayActive, setIsPlayActive] = useState<boolean>(false);
  const [trackCovers, setTrackCovers] = useState<string[]>([
    currentSong.cover,
    nextSong(currentSong, trackList).cover,
    previousSong(currentSong, trackList).cover,
  ]);

  useEffect(() => {
    const slides = [
      currentSong.cover,
      nextSong(currentSong, trackList).cover,
      previousSong(currentSong, trackList).cover,
    ];
    setTrackCovers(isRepeatedSong ? [currentSong.cover] : slides);
  }, [currentSong, trackList]);

  return (
    <div className={styles.player}>
      <DiscSlider slides={trackCovers} />
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
        isPlayActive={isPlayActive}
        handlePlay={setIsPlayActive}
      />
      <TimerBar
        isPlayActive={isPlayActive}
        currentSong={currentSong}
        handleSongChange={handleSongChange}
        trackList={trackList}
      />
    </div>
  );
};
