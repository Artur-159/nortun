import Link from "next/link";
import Image from "next/image";
import { JSX } from "react";
import { FOOTER_DATA } from "../../../../constants/footer";

import styles from "./styles.module.scss";

const Top = (): JSX.Element => {
  return (
    <section className={styles.wrapper}>
      {FOOTER_DATA.map((section, index: number) => (
        <div className={styles.section} key={index}>
          {section.items && (
            <ul>
              {section.items.map((item, i: number) => (
                <li key={i}>
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
          )}
          {section.icons && (
            <div className={styles.img_block}>
              {section.icons.map((item, i: number) => (
                <Image
                  key={i}
                  width={40}
                  height={40}
                  src={item.src}
                  alt={item.title}
                />
              ))}
            </div>
          )}
          {section.privacy_text && <p>{section.privacy_text}</p>}
        </div>
      ))}
    </section>
  );
};

export default Top;
