import styles from "./shuffleButton.module.css";

interface IShuffleButtonProps {
  handleShufflePlaylist: (value: boolean) => void;
  isShuffledPlaylist: boolean;
}

export const ShuffleButton: React.FC<IShuffleButtonProps> = ({
  handleShufflePlaylist,
  isShuffledPlaylist,
}) => {
  return (
    <button
      className={styles.shuffleButton}
      onClick={() => handleShufflePlaylist(!isShuffledPlaylist)}
    >
      Shuffle Play
    </button>
  );
};
