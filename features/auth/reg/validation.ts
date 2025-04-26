import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Անունը պարտադիր է") // Name is required
    .min(2, "Անունը պետք է լինի առնվազն 2 տառ"), // Name must be at least 2 characters
  surname: Yup.string()
    .required("Ազգանունը պարտադիր է") // Surname is required
    .min(2, "Ազգանունը պետք է լինի առնվազն 2 տառ"), // Surname must be at least 2 characters
  phone_number: Yup.string()
    .required("Հեռախոսահամարը պարտադիր է") // Phone number is required
    .matches(/^[0-9]+$/, "Հեռախոսահամարը պետք է պարունակի միայն թվեր") // Phone number must contain only numbers
    .min(6, "Հեռախոսահամարը պետք է լինի առնվազն 6 նիշ"), // Phone number must be at least 6 digits
  email: Yup.string()
    .required("Էլ․ հասցեն պարտադիր է") // Email is required
    .email("Անվավեր էլ․ հասցե"), // Invalid email address
  password: Yup.string()
    .required("Գաղտնաբառը պարտադիր է") // Password is required
    .min(6, "Գաղտնաբառը պետք է լինի առնվազն 6 նիշ"), // Password must be at least 6 characters
  confirm_password: Yup.string()
    .required("Հաստատեք գաղտնաբառը պարտադիր է") // Confirm password is required
    .oneOf([Yup.ref("password")], "Գաղտնաբառերը պետք է համընկնեն"), // Passwords must match
});

//! Don`t remove comments these will be use for translations
