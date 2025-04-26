import Link from "next/link";
import { JSX } from "react";
import { MENU_ITEMS } from "../../../../constants/header";
import LangSelect from "@/components/lang-select";
import Icon from "@/components/icon";

import styles from "./styles.module.scss";

const Top = (): JSX.Element => {
  return (
    <div className={styles.header_top}>
      <div className={styles.container}>
        <ul className={styles.menu_list}>
          {MENU_ITEMS.map((item, i) => {
            const linkHref = item.url || item.href || "#";
            const itemClass =
              item.position === "right" ? styles["ml-auto"] : undefined;

            return (
              <li key={i} className={itemClass}>
                {item.icon && (
                  <Icon
                    width={16}
                    height={16}
                    name={item.icon}
                    className={styles.icon}
                  />
                )}
                <Link href={linkHref}>{item.title}</Link>
              </li>
            );
          })}
          <LangSelect />
        </ul>
      </div>
    </div>
  );
};

export default Top;
