import { JSX } from "react";
import { Controller, useForm } from "react-hook-form";
import Input from "../input";
import Select from "../select";
import Textarea from "../textarea";

import styles from "./styles.module.scss";
import { CALC_FORM_OPTIONS } from "@/constants/home";

type FormData = {
  name: string;
  email: string;
  selectedOption1: string;
  selectedOption2: string;
  message: string;
};

const CalculationForm = (): JSX.Element => {
  const {
    control,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      selectedOption1: "",
      selectedOption2: "",
      message: "",
    },
  });

  return (
    <div className={styles.calculation_form}>
      <div className={styles.inner_form}>
        <Input
          placeholder="Անուն"
          type="text"
          name="name"
          control={control}
          className={styles.input}
        />
        <Input
          placeholder="Էլ. հասցե"
          type="text"
          name="email"
          control={control}
          className={styles.input}
        />

        <Controller
          name="selectedOption1"
          control={control}
          render={({ field }) => (
            <Select
              onSelect={field.onChange}
              className={styles.select}
              options={CALC_FORM_OPTIONS}
              placeholder="Նախընտրելի կաթսան"
              selectedValue={field.value ?? ""}
            />
          )}
        />
        <Controller
          name="selectedOption2"
          control={control}
          render={({ field }) => (
            <Select
              onSelect={field.onChange}
              className={styles.select}
              options={CALC_FORM_OPTIONS}
              placeholder="Նախընտրելի բրենդ"
              selectedValue={field.value ?? ""}
            />
          )}
        />
        {/* after discussion refactor or replace with react-select */}

        <Textarea
          rows={7}
          name="message"
          control={control}
          className={styles.textarea}
          placeholder="Հաղորդագրություն"
          error={errors.message?.message}
        />

        <button className={styles.calculation_btn}>
          Ստանալ անվճար հաշվարկ
        </button>
      </div>
    </div>
  );
};

export default CalculationForm;
