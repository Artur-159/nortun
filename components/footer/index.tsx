import { JSX } from "react";
import Top from "./components/top";
import Bottom from "./components/bottom";

import styles from "./styles.module.scss";

const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Top />
        <Bottom />
      </div>
    </footer>
  );
};

export default Footer;
