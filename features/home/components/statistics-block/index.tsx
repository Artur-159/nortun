"use client";

import { JSX, useEffect, useState, useRef } from "react";
import { STATISTICS_BLOCK_DATA } from "@/constants/home";

import styles from "./styles.module.scss";

const StatisticsBlock = (): JSX.Element => {
  const [counters, setCounters] = useState<number[]>(
    Array(STATISTICS_BLOCK_DATA.length).fill(0)
  );
  const [isVisible, setIsVisible] = useState(false);
  const blockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const currentBlockRef = blockRef.current;
    if (currentBlockRef) {
      observer.observe(currentBlockRef);
    }

    return () => {
      if (currentBlockRef) {
        observer.unobserve(currentBlockRef);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const incrementCounters = () => {
      STATISTICS_BLOCK_DATA.forEach((stat, index) => {
        let count = 0;
        const target = stat.counter;
        const interval = setInterval(() => {
          if (count < target) {
            count++;
            setCounters((prevCounters) => {
              const updatedCounters = [...prevCounters];
              updatedCounters[index] = count;
              return updatedCounters;
            });
          } else {
            clearInterval(interval);
          }
        }, 40);
      });
    };

    incrementCounters();
  }, [isVisible]);

  return (
    <div ref={blockRef} className={styles.container}>
      <div className={styles.statistic_block}>
        {STATISTICS_BLOCK_DATA.map((stat, index) => (
          <div key={index} className={styles.statistic_item}>
            <div className={styles.item_inner}>
              <span className={styles.item_counter}>{counters[index]}</span>
              <h3 className={styles.item_title}>{stat.title}</h3>
              <span className={styles.item_description}>
                {stat.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatisticsBlock;
