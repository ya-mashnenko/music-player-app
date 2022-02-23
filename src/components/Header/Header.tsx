import styles from "./header.module.css";

export interface IHeaderProps {
  page: "main" | "view more" | "playlist";
  musicData: { album: string; artist: string; song: string };
}

export const Header: React.FC<IHeaderProps> = ({ page, musicData }) => {
  const headerTitle = (pageName: IHeaderProps["page"]) => {
    switch (pageName) {
      case "main":
        return (
          <div className={styles.headerTitleMain}>
            <span className="subtitle">Album</span>
            <span className="title">{musicData.album}</span>
          </div>
        );
      case "playlist":
        return (
          <div className={styles.headerTitlePlaylist}>
            <span className="title">{musicData.song}</span>
            <span className="subtitle">{musicData.artist}</span>
          </div>
        );
      case "view more":
        return;
    }
  };

  return (
    <header>
      <button className={styles.controlButton}>
        <img src="back_ico.svg" alt="back" width={16} />
      </button>
      {headerTitle(page)}
      <button className={styles.controlButton}>
        <img src="more_ico.svg" alt="more" />
      </button>
    </header>
  );
};
