"use client";

import { JSX, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { REG_DATA } from "@/constants/auth";
import Input from "../../../components/input";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./validation";

import styles from "./styles.module.scss";

interface FormData {
  name: string;
  surname: string;
  phone_number: string;
  email: string;
  password: string;
  confirm_password: string;
}

interface RegProps {
  title: string;
}

const Reg = ({ title }: RegProps): JSX.Element => {
  const [resultData, setResultData] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      surname: "",
      phone_number: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value as string);
    });

    const requestOptions = {
      method: "POST",
      body: formData,
    };

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER}/register`,
        requestOptions
      );

      if (!res.ok) {
        const { error } = await res.json();
        throw new Error(error?.message);
      }

      const responseData = await res.json();
      setResultData(true);
      console.log("Registration successful:", responseData);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error during registration:", error.message);
      } else {
        console.error("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.form_block}>
        <h1 className={styles.title}>{title}</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inner_form}>
            {REG_DATA.map((field) => (
              <div key={field.name}>
                <Input
                  type={field.type}
                  control={control}
                  label={field.label}
                  placeholder={field.placeholder}
                  name={field.name as keyof FormData}
                  error={errors[field.name as keyof FormData]?.message}
                />
              </div>
            ))}
            <button type="submit" className={styles.submit_bnt}>
              Գրանցվել
            </button>
          </div>
        </form>
        {resultData && <p>Registration successful!</p>}
      </div>
    </div>
  );
};

export default Reg;
