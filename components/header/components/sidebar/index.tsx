import Link from "next/link";
import Image from "next/image";
import { JSX } from "react";
import { OPEN_SIDEBAR_MENU, SIDEBAR_DATA } from "@/constants/sidebar";
import Icon from "@/components/icon";

import styles from "./styles.module.scss";

const Sidebar = (): JSX.Element => {
  return (
    <aside className={styles.wrapper}>
      <ul className={styles.sidebar_menu}>
        {SIDEBAR_DATA.map((item, i) => {
          return (
            <li key={i} className={styles.sidebar_item}>
              <div className={styles.item_inner}>
                {item.icon_name && (
                  <Icon
                    width={32}
                    height={32}
                    name={item.icon_name}
                    className={styles.icon}
                  />
                )}
                {item.name}
              </div>
            </li>
          );
        })}
      </ul>
      <ul className={styles.sidebarItem_menu}>
        {OPEN_SIDEBAR_MENU.map((item, i) => {
          return (
            <li key={i}>
              <Link href={item.href || "#"}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
      <Image
        src="/images/sidebar_img.png"
        alt="image"
        width={300}
        height={706}
        className={styles.sidebar_img}
      />
    </aside>
  );
};

export default Sidebar;
