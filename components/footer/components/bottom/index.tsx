import { JSX } from "react";
import Image from "next/image";
import Link from "next/link";
import { BOTTOM_FOOTER_DATA, FOOTER_DATA } from "../../../../constants/footer";
import Icon from "@/components/icon";

import styles from "./styles.module.scss";

const Bottom = (): JSX.Element => {
  const { icons, privacy_text } = FOOTER_DATA[3];

  return (
    <div className={styles.footer_bottom}>
      <div className={styles.inner_block}>
        <Icon name="logo" width={164} height={36} />
        <div className={styles.img_block}>
          <div>
            {BOTTOM_FOOTER_DATA.map((icon, index) => (
              <div key={index} className={styles.icon_container}>
                <Icon name={icon.src} width={20} height={20} />
                {icon.number && (
                  <Link
                    href={`tel:${icon.number}`}
                    className={styles.phone_number}
                  >
                    {icon.number}
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className={styles.hide_icons_block}>
            {icons &&
              icons.map((item, index) => (
                <Image
                  key={index}
                  src={item.src}
                  width={20}
                  height={20}
                  alt={item.title}
                />
              ))}
          </div>
        </div>
      </div>
      <p className={styles.hide_privacy}>{privacy_text}</p>
    </div>
  );
};

export default Bottom;
