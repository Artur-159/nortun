"use client";

import clsx from "clsx";
import {
  useController,
  FieldValues,
  Control,
  Path,
  PathValue,
} from "react-hook-form";

import styles from "./styles.module.scss";

interface InputProps<T extends FieldValues> {
  type?: "text" | "password" | "email" | "number";
  label?: string;
  name: Path<T>;
  error?: string;
  control: Control<T>;
  defaultValue?: PathValue<T, Path<T>>;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
  readonly?: boolean;
}

const Input = <T extends FieldValues>({
  type = "text",
  name,
  error,
  control,
  defaultValue,
  disabled = false,
  placeholder,
  className,
  readonly = false,
}: InputProps<T>) => {
  const { field } = useController<T>({
    control,
    name,
    defaultValue,
  });

  return (
    <div className={styles.input_wrapper}>
      <input
        type={type}
        disabled={disabled}
        readOnly={readonly}
        placeholder={placeholder}
        className={clsx(styles.input, className)}
        {...field}
        value={field.value}
      />
      {error && <span className={styles.error_message}>{error}</span>}
    </div>
  );
};

Input.displayName = "Input";

export default Input;
