import "./App.css";
import { MainPage } from "./page/Main/Main";
import { useEffect, useState } from "react";
import { PageStateProps, SongDataProps, TrackListProps } from "./types";
import { PlaylistPage } from "./page/Playlist/Playlist";
import { MenuPage } from "./page/Menu/Menu";
import { nextSong, shuffleSongs } from "./helpers";

const App: React.FC<TrackListProps> = ({ trackList }) => {
  const [currentPage, setCurrentPage] = useState<PageStateProps>(
    PageStateProps.main
  );
  const [currentSong, setCurrentSong] = useState<SongDataProps>(trackList[0]);
  const [playlist, setPlaylist] = useState<SongDataProps[]>(trackList);
  const [isShuffledPlaylist, setIsShuffledPlaylist] = useState<boolean>(false);
  const [isRepeatedSong, setIsRepeatedSong] = useState<boolean>(false);

  useEffect(() => {
    setPlaylist(
      isRepeatedSong
        ? Array.of(currentSong)
        : isShuffledPlaylist
        ? shuffleSongs(trackList)
        : trackList
    );
  }, [isShuffledPlaylist, isRepeatedSong]);

  return (
    <div className="App">
      <div className="wrapper">
        {currentPage === PageStateProps.playlist ? (
          <PlaylistPage
            trackList={playlist}
            handlePageChange={setCurrentPage}
            currentSong={currentSong}
            handleShufflePlaylist={setIsShuffledPlaylist}
            isShuffledPlaylist={isShuffledPlaylist}
          />
        ) : (
          <MainPage
            trackList={playlist}
            handlePageChange={setCurrentPage}
            currentSong={currentSong}
            handleSongChange={setCurrentSong}
            handleShufflePlaylist={setIsShuffledPlaylist}
            isShuffledPlaylist={isShuffledPlaylist}
            handleRepeat={setIsRepeatedSong}
            isRepeatedSong={isRepeatedSong}
          />
        )}
        {currentPage === PageStateProps.menu && (
          <MenuPage
            currentSong={currentSong}
            nextSong={nextSong(currentSong, playlist)}
            handlePageChange={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
};

export default App;
