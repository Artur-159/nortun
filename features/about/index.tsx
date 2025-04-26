import { JSX } from "react";
import styles from "./styles.module.scss";

interface AboutProps {
  title: string;
}

const About = ({ title }: AboutProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <h1>{title}</h1>
    </div>
  );
};

export default About;
