"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { JSX, useRef, useState, useTransition } from "react";
import clsx from "clsx";
import { LANG_OPTIONS } from "../../constants/lang-select";
import useOutsideClick from "@/hooks/useOutsideClick";

import styles from "./styles.module.scss";

interface LangOption {
  id: number;
  value: string;
}

interface LangSelectProps {
  className?: string;
}

const LangSelect = ({ className }: LangSelectProps): JSX.Element => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const params = useParams();
  const [isPending] = useTransition();
  const [active, setActive] = useState<boolean>(false);
  const defaultLang =
    LANG_OPTIONS.find((lang) => lang.value === "am") || LANG_OPTIONS[0];
  const [selected, setIsSelected] = useState<LangOption | undefined>(
    LANG_OPTIONS.find((lang) => lang.value === params.lang) || defaultLang
  );

  const handleItemClick = (item: LangOption) => {
    setIsSelected(item);
    setActive(false);
    // Uncomment and update for localization change logic
    // startTransition(() => {
    //   router.replace({ pathname, params }, { locale: item.value });
    // });
  };

  useOutsideClick(dropdownRef, () => setActive(false));

  return (
    <div
      ref={dropdownRef}
      className={clsx(styles.dropdown, className, {
        [styles.active]: active,
      })}
    >
      <div
        onClick={() => setActive(!active)}
        className={clsx(styles.dropdown_btn, {
          [styles.lang_title_active]: active,
        })}
      >
        {selected && (
          <>
            <Image
              width={12}
              height={6}
              alt={selected.value}
              src="/icons/down.svg"
              className={active ? styles.rotate : styles.arrow_normal}
            />
            {selected.value}
          </>
        )}
      </div>
      <div
        className={clsx(
          styles.dropdown_content,
          active ? styles.lang_list_active : styles.hide,
          { [styles.show]: active }
        )}
      >
        {LANG_OPTIONS?.map(
          (item) =>
            selected?.value !== item.value && (
              <div
                key={item.id}
                className={styles.item}
                aria-disabled={isPending}
                onClick={() => handleItemClick(item)}
              >
                {item.value}
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default LangSelect;
