import Image from "next/image";
import Link from "next/link";
import {
  ABSOLUTE_BLOCK_DATA,
  AVAILABLE_BLOCK_DATA,
  AVAILABLE_DECS,
  AVAILABLE_IMAGES_DATA,
} from "@/constants/home";
import Icon from "@/components/icon";

import styles from "./styles.module.scss";

const AvailableBlock = () => {
  return (
    <div className={styles.available_block}>
      <div className={styles.container}>
        <div className={styles.inner_block}>
          <div className={styles.left_block}>
            <h2 className={styles.block_title}>Մենք հասանելի ենք</h2>
            <div className={styles.block_description}>{AVAILABLE_DECS}</div>
            {AVAILABLE_BLOCK_DATA.schedule.map((item, index) => (
              <div key={index}>
                <div className={styles.block_workingText}>
                  {item.workingText}
                </div>
                <div className={styles.working_days}>
                  {item.mainWorkingDays}
                  <span>{item.mainWorkingHours}</span>
                </div>
                <div className={styles.sunday_available}>
                  {item.sundayAvailability}
                  <span>{item.sundayWorkingHours}</span>
                </div>
                <div className={styles.location_block}>
                  {item.icon_name && (
                    <Icon
                      width={36}
                      height={36}
                      name={item.icon_name}
                      className={styles.location_icon}
                    />
                  )}
                  {item.address}
                </div>
                <div className={styles.extended_days}>
                  {item.extendedWorkingDays}
                  <span>{item.extendedWorkingHours}</span>
                </div>
                <div className={styles.extended_sunday}>
                  {item.extendedSundayAvailability}
                  <span>{item.extendedSundayWorkingHours}</span>
                </div>
              </div>
            ))}
            <button className={styles.contact_btn}>Կապ մեզ հետ</button>
          </div>
          <div className={styles.right_block}>
            <div className={styles.images_block}>
              {AVAILABLE_IMAGES_DATA.map((img, index) =>
                img.src && img.alt ? (
                  <Image
                    width={img.width}
                    height={img.height}
                    alt={img.alt}
                    src={img.src}
                    key={index}
                  />
                ) : (
                  <div key={index} className={styles.empty_div} />
                )
              )}
            </div>
            <div className={styles.absolute_block}>
              <div className={styles.inner_block}>
                <h2 className={styles.block_title}>Աշխատում ենք մինչև</h2>
                <div className={styles.available_time}>21:00</div>
                <div className={styles.icon_block}>
                  {ABSOLUTE_BLOCK_DATA.map((item, index) => (
                    <Link href="#" key={index}>
                      <Image
                        src={item}
                        alt="icon"
                        width={40}
                        height={40}
                        className={styles.icon}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableBlock;
