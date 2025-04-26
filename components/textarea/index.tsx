"use client";

import clsx from "clsx";
import { Control, Path, FieldValues, useController } from "react-hook-form";

import styles from "./styles.module.scss";

interface TextareaProps<T extends FieldValues> {
  className?: string;
  placeholder?: string;
  rows?: number;
  error?: string;
  control: Control<T>;
  name: Path<T>;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea = <T extends FieldValues>({
  name,
  control,
  className,
  placeholder,
  rows = 3,
  error,
  disabled = false,
}: TextareaProps<T>) => {
  const { field } = useController<T>({
    control,
    name,
  });

  return (
    <div className={styles.wrapper}>
      <textarea
        rows={rows}
        placeholder={placeholder}
        disabled={disabled}
        className={clsx(className, styles.textarea)}
        {...field}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

Textarea.displayName = "Textarea";

export default Textarea;
