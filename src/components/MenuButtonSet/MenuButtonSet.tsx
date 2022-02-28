import styles from "./menuButtonSet.module.css";

export const MenuButtonSet = () => {
  return (
    <div className={styles.buttonGroup}>
      <button className={styles.buttonLink}>Add to playlist</button>
      <button className={styles.buttonLink}>Show album</button>
      <button className={styles.buttonLink}>Share with friends</button>
    </div>
  );
};
