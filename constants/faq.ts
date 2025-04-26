interface FAQItem {
  id: number;
  type: string;
  name: string;
  placeholder: string;
}

export const FAQ_FROM_DATA: FAQItem[] = [
  { id: 1, type: "text", name: "name", placeholder: "Full Name *" },
  { id: 2, type: "number", name: "phone", placeholder: "Phone *" },
  { id: 3, type: "email", name: "email", placeholder: "Email *" },
  {
    id: 4,
    type: "string",
    name: "message_title",
    placeholder: "Message title *",
  },
];
