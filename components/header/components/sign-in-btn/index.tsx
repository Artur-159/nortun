import { JSX } from "react";
import clsx from "clsx";
import Icon from "@/components/icon";

import styles from "./styles.module.scss";

interface SignInBtnProps {
  label: string;
  className?: string | undefined;
  onClick?: () => void;
}

const SignInBtn = ({
  label,
  className = undefined,
  onClick,
}: SignInBtnProps): JSX.Element => {
  return (
    <div className={styles.btn_block}>
      <button className={clsx(styles.signIn_btn, className)} onClick={onClick}>
        <Icon
          width={21}
          height={21}
          name="profile"
          className={styles.profile_icon}
        />
        <p className={styles.btn_text}>{label}</p>
      </button>
    </div>
  );
};

export default SignInBtn;
