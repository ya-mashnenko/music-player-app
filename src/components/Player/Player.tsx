import { TrackProps } from "../../types";
import { DiscSlider } from "../DiscSlider/DiscSlider";
import { TrackTitle } from "../TrackTitle/TrackTitle";
import { ControlPanel } from "../ControlPanel/ControlPanel";
import { TimerBar } from "../TimerBar/TimerBar";

export const Player: React.FC<TrackProps> = ({ track: currentSong }) => {
  return (
    <main>
      <DiscSlider />
      <TrackTitle
        song={currentSong.song}
        artist={currentSong.artist}
        variant="main"
      />
      <ControlPanel />
      <TimerBar duration={currentSong.duration} />
    </main>
  );
};
