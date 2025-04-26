import { useState, useEffect, JSX, useCallback } from "react";
import styles from "./styles.module.scss";

interface TimerProps {
  targetDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Timer = ({ targetDate }: TimerProps): JSX.Element => {
  const calculateTimeLeft = useCallback((): TimeLeft => {
    const difference = targetDate.getTime() - new Date().getTime();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, calculateTimeLeft]);

  if (!timeLeft) {
    return <div className={styles.timer}>Loading...</div>;
  }

  return (
    <div className={styles.timer}>
      <div className={styles.timer_unit}>
        <div className={styles.timer_value}>{timeLeft.days}</div>
        <div className={styles.timer_label}>Օր</div>
      </div>
      <span>:</span>
      <div className={styles.timer_unit}>
        <div className={styles.timer_value}>{timeLeft.hours}</div>
        <div className={styles.timer_label}>Ժամ</div>
      </div>
      <span>:</span>
      <div className={styles.timer_unit}>
        <div className={styles.timer_value}>{timeLeft.minutes}</div>
        <div className={styles.timer_label}>Րոպե</div>
      </div>
      <span>:</span>
      <div className={styles.timer_unit}>
        <div className={styles.timer_value}>{timeLeft.seconds}</div>
        <div className={styles.timer_label}>Վրկ</div>
      </div>
    </div>
  );
};

export default Timer;
