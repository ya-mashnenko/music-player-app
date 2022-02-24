import { Header } from "../../components/Header/Header";
import { TracksList } from "../../components/TracksList/TracksList";
import { SongDataProps, TrackListProps } from "../../types";

export const PlaylistPage: React.FC<TrackListProps> = ({ trackList }) => {
  return (
    <div>
      <Header page={"playlist"} />
      <TracksList trackList={trackList} />
    </div>
  );
};
