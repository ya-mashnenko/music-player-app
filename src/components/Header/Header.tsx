import { TrackTitle } from "../TrackTitle/TrackTitle";
import styles from "./header.module.css";
import { SongDataProps } from "../../types";

export interface IHeaderProps {
  page: "main" | "view more" | "playlist";
  musicData?: SongDataProps;
}

export const Header: React.FC<IHeaderProps> = ({ page, musicData }) => {
  const headerTitle = (pageName: IHeaderProps["page"]) => {
    switch (pageName) {
      case "view more":
        return;
      case "main":
        return (
          <div className={styles.headerTitleMain}>
            <span className="subtitle">Album</span>
            <span className="title">{musicData?.album}</span>
          </div>
        );
      case "playlist":
        return (
          <TrackTitle
            song={musicData?.song || "unknown song"}
            artist={musicData?.artist || "unknown artist"}
            variant="header"
          />
        );
    }
  };

  return (
    <header>
      <button className={styles.controlButton}>
        <img src="back_ico.svg" alt="back" width={16} />
      </button>
      {musicData && headerTitle(page)}
      <button className={styles.controlButton}>
        <img src="more_ico.svg" alt="more" />
      </button>
    </header>
  );
};
