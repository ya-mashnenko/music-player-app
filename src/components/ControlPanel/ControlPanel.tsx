import styles from "./controlPanel.module.css";

export const ControlPanel = () => {
  return (
    <div className={styles.controlPanel}>
      <button className={styles.controlButton}>
        <img src="shuffle_ico.svg" alt="shuffle" />
      </button>
      <button className={styles.controlButton}>
        <img src="previous_ico.svg" alt="previous" />
      </button>
      <button className={styles.controlButton} style={{ width: "250px" }}>
        <img src="Play_active.png" alt="play" width="100%" />
      </button>
      <button className={styles.controlButton}>
        <img src="next_ico.svg" alt="next" />
      </button>
      <button className={styles.controlButton}>
        <img src="repeat_ico.svg" alt="repeat" />
      </button>
    </div>
  );
};
