"use client";

import { JSX, useState } from "react";
import clsx from "clsx";
import styles from "./styles.module.scss";
import Icon from "../icon";

interface SelectProps {
  options: string[];
  onSelect: (option: string) => void;
  selectedValue?: string;
  className?: string;
  placeholder?: string;
}

const Select = ({
  options,
  onSelect,
  selectedValue,
  className,
  placeholder,
}: SelectProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: string) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className={clsx(styles.wrapper, className, { [styles.open]: isOpen })}>
      <div
        className={styles.select_content}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className={styles.selected}>{selectedValue || placeholder}</span>
        <Icon
          name="select_arrow"
          width={16}
          height={9}
          className={styles.select_arrow}
        />
      </div>

      <ul className={clsx(styles.options)}>
        {options.map((option) => (
          <li
            key={option}
            className={styles.option}
            onClick={() => handleSelect(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
