import styles from "./timerBar.module.css";

interface ITimeBarProps {
  duration: string;
}

export const TimerBar: React.FC<ITimeBarProps> = ({ duration }) => {
  return (
    <div className={styles.timerBar}>
      <span>0:00</span>
      <div className={styles.barOuter}>
        <div className={styles.barInner} />
      </div>
      <span>{duration}</span>
    </div>
  );
};
