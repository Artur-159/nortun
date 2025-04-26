"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { useState, JSX } from "react";
import { useRouter } from "next/router";
import Input from "@/components/input";

import styles from "./styles.module.scss";

interface LoginFormValues {
  email: string;
  password: string;
}

interface LoginProps {
  onClose?: () => void;
}

const Login = ({ onClose = () => {} }: LoginProps): JSX.Element => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);

    const requestOptions = {
      method: "POST",
      body: formData,
    };

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER}/login`,
        requestOptions
      );

      if (!res.ok) {
        const { error } = await res.json();
        throw new Error(error?.message);
      }

      const {
        data: { token },
      } = await res.json();

      document.cookie = `token=${token}; `;
      router.push("/");
      onClose();
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("An unexpected error occurred");
      }
    }
  };

  return (
    <div className={styles.form}>
      {errorMessage && <div className={styles.error}>{errorMessage}</div>}
      <Input name="email" control={control} error={errors.email?.message} />
      <Input
        name="password"
        control={control}
        error={errors.password?.message}
      />
      <button onClick={handleSubmit(onSubmit)} className={styles.login_btn}>
        Login
      </button>
    </div>
  );
};

export default Login;
