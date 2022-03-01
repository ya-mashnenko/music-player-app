import styles from "./header.module.css";
import { PageStateProps, SongDataProps } from "../../types";

export interface IHeaderProps {
  currentPage: PageStateProps.menu | PageStateProps.main;
  musicData?: SongDataProps;
  handleMenuOpen: (value: IHeaderProps["currentPage"]) => void;
}

export const Header: React.FC<IHeaderProps> = ({
  currentPage,
  musicData,
  handleMenuOpen,
}) => {
  const isMenuOpen = currentPage === PageStateProps.menu;
  return (
    <header className={styles.headerMain}>
      <div style={{ width: "35px" }}>
        {isMenuOpen && (
          <button
            className={styles.controlButton}
            onClick={() => handleMenuOpen(PageStateProps.main)}
          >
            <img src="back_ico.svg" alt="back" width={16} />
          </button>
        )}
      </div>
      {!isMenuOpen && (
        <div className={styles.headerTitleMain}>
          <span className="subtitle">Album</span>
          <span className="title">{musicData?.album}</span>
        </div>
      )}
      <button
        className={`${styles.controlButton} ${
          isMenuOpen ? styles.disabledButton : null
        }`}
        disabled={isMenuOpen}
        onClick={() => handleMenuOpen(PageStateProps.menu)}
      >
        <img src="more_ico.svg" alt="more" />
      </button>
    </header>
  );
};
