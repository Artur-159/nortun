import { JSX } from "react";
import { useState } from "react";
import clsx from "clsx";

import styles from "./styles.module.scss";

interface ToggleButtonProps {
  label: string;
  className?: string | undefined;
  onClick: () => void;
}

const Hamburger = ({
  label,
  className = undefined,
  onClick,
}: ToggleButtonProps): JSX.Element => {
  const [active, setActive] = useState<boolean>(false);

  const toggleBtn = () => {
    if (onClick) {
      onClick();
    }
    setActive((prevState) => !prevState);
  };

  return (
    <button
      className={clsx(
        styles.hamburger_btn,
        { [styles.active]: active },
        className
      )}
      aria-label={label}
      onClick={toggleBtn}
    >
      <span />
      <span />
      <span />
      <p className={styles.btn_text}>{label}</p>
    </button>
  );
};

export default Hamburger;
