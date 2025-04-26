export interface Field {
  name: string;
  label: string;
  type: "text" | "email" | "password" | "number";
  placeholder?: string;
}

export const REG_DATA: Field[] = [
  { name: "name", label: "Name", placeholder: "Անուն", type: "text" },
  {
    name: "surname",
    label: "Surname",
    type: "text",
    placeholder: "Ազգանուն",
  },
  {
    name: "phone_number",
    label: "Phone Number",
    type: "text",
    placeholder: "Հեռախոսահամար",
  },

  {
    name: "email",
    label: "Email",
    placeholder: "Էլ․ փոստի հասցե",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Գաղտնաբառ",
  },
  {
    name: "confirm_password",
    label: "Confirm Password",
    type: "password",
    placeholder: "Հաստատել Գաղտնաբառը",
  },
];
