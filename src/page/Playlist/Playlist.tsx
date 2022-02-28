import { useState } from "react";
import styles from "./playlist.module.css";
import { PageStateProps, SongDataProps, TrackListProps } from "../../types";
import { PlaylistFooter } from "../../components/PlaylistFooter/PlaylistFooter";
import { PlaylistHeader } from "../../components/PlaylistHeader/PlaylistHeader";
import { TracksList } from "../../components/TracksList/TracksList";

interface IPlaylistPage {
  currentSong: SongDataProps;
  trackList: SongDataProps[];
  handlePageChange: (page: PageStateProps) => void;
}

export const PlaylistPage: React.FC<IPlaylistPage> = ({
  currentSong,
  trackList,
  handlePageChange,
}) => {
  return (
    <div className={styles.playlistPage}>
      <PlaylistHeader track={currentSong} handleMainOpen={handlePageChange} />
      <main>
        <TracksList trackList={trackList} />
      </main>
      <PlaylistFooter />
    </div>
  );
};
