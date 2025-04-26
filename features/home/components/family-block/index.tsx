import Image from "next/image";
import { FAMILY_BLOCK_DATA } from "@/constants/home";

import styles from "./styles.module.scss";

const FamilyBlock = () => {
  return (
    <div className={styles.family_block}>
      <div className={styles.marginal_block}>
        <div className={styles.left_block} />
        <div className={styles.center_block}>
          <Image
            width={620}
            height={576}
            alt="family"
            src="https://nortun.am/upload/resize_cache/webp/upload/iblock/7d4/b32wjuwqx93hpkduey0oubcdfkdfea34.webp"
          />
          <div className={styles.text_block}>
            <h2 className={styles.block_title}>Մենք ընտանիք ենք</h2>
            {FAMILY_BLOCK_DATA.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
        <div className={styles.right_block} />
      </div>
    </div>
  );
};

export default FamilyBlock;
