import "./App.css";
import { musicDataMock } from "./mock";
import { MainPage } from "./page/Main/Main";
import { useState } from "react";
import { PageStateProps, SongDataProps, TrackListProps } from "./types";
import { PlaylistPage } from "./page/Playlist/Playlist";
import { MenuPage } from "./page/Menu/Menu";
import { nextSong } from "./helpers";

const App: React.FC<TrackListProps> = ({ trackList }) => {
  const [currentPage, setCurrentPage] = useState<PageStateProps>(
    PageStateProps.main
  );
  const [currentSong, setCurrentSong] = useState<SongDataProps>(trackList[0]);
  return (
    <div className="App">
      <div className="wrapper">
        {currentPage === PageStateProps.playlist ? (
          <PlaylistPage
            trackList={musicDataMock}
            handlePageChange={setCurrentPage}
            currentSong={currentSong}
          />
        ) : (
          <MainPage
            trackList={musicDataMock}
            handlePageChange={setCurrentPage}
            currentSong={currentSong}
            handleSongChange={setCurrentSong}
          />
        )}
        {currentPage === PageStateProps.menu && (
          <MenuPage
            currentSong={currentSong}
            nextSong={nextSong(currentSong, trackList)}
            handlePageChange={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
};

export default App;
