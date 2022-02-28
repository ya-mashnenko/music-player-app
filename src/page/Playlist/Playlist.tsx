import styles from "./playlist.module.css";
import { PageStateProps, SongDataProps } from "../../types";
import { PlaylistFooter } from "../../components/PlaylistFooter/PlaylistFooter";
import { PlaylistHeader } from "../../components/PlaylistHeader/PlaylistHeader";
import { TracksList } from "../../components/TracksList/TracksList";

interface IPlaylistPage {
  currentSong: SongDataProps;
  trackList: SongDataProps[];
  handlePageChange: (page: PageStateProps) => void;
  handleShufflePlaylist: (value: boolean) => void;
  isShuffledPlaylist: boolean;
}

export const PlaylistPage: React.FC<IPlaylistPage> = ({
  currentSong,
  trackList,
  handlePageChange,
  handleShufflePlaylist,
  isShuffledPlaylist,
}) => {
  return (
    <div className={styles.playlistPage}>
      <PlaylistHeader track={currentSong} handleMainOpen={handlePageChange} />
      <main>
        <TracksList trackList={trackList} />
      </main>
      <PlaylistFooter
        handleShufflePlaylist={handleShufflePlaylist}
        isShuffledPlaylist={isShuffledPlaylist}
      />
    </div>
  );
};
