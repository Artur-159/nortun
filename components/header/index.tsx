import Top from "./components/top";
import Bottom from "./components/bottom";

import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Top />
      <Bottom />
    </header>
  );
};

export default Header;
