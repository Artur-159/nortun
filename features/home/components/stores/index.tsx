import Image from "next/image";
import { STORES_DATA } from "@/constants/home";

import styles from "./styles.module.scss";

const Stores = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.section_title}>Մեր խանութ-սրահները</h2>
      <ul className={styles.stores_list}>
        {STORES_DATA.map((store, index) => (
          <li key={index}>
            <Image src={store.image} alt="store" width={285} height={200} />
            <div className={styles.inner_block}>
              <h2 className={styles.address_store}>{store.address}</h2>
              <div className={styles.phone_store}>{store.phone}</div>
              <div className={styles.working_days}>{store.workingDays}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stores;
