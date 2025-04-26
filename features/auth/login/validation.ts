import * as yup from "yup";

const validation = (t: (key: string) => string) =>
  yup.object().shape({
    email: yup
      .string()
      .email(t("Validations.invalid_email"))
      .required(t("Validations.email*")),
    password: yup.string().required(t("Validations.password*")),
  });

export default validation;
