import { useState } from "react";
import { ControlPanel } from "../../components/ControlPanel/ControlPanel";
import { DiscSlider } from "../../components/DiscSlider/DiscSlider";
import { Footer } from "../../components/Footer/Footer";
import { Header, IHeaderProps } from "../../components/Header/Header";
import { TimerBar } from "../../components/TimerBar/TimerBar";
import { TrackTitle } from "../../components/TrackTitle/TrackTitle";
import styles from "./main.module.css";
import { SongDataProps, TrackListProps } from "../../types";

export const MainPage: React.FC<TrackListProps> = ({ trackList }) => {
  const [currentPage, setCurrentPage] = useState<IHeaderProps["page"]>("main");
  const [currentSong, setCurrentSong] = useState<SongDataProps>(trackList[0]);

  const nextSong = (currentSong: SongDataProps, trackList: SongDataProps[]) => {
    const songIndex = trackList.findIndex(
      (track) => JSON.stringify(track) === JSON.stringify(currentSong)
    );
    return trackList[songIndex + 1];
  };
  return (
    <div className={styles.mainPage}>
      <Header page={currentPage} musicData={currentSong} />
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
      <Footer track={nextSong(currentSong, trackList)} />
    </div>
  );
};
