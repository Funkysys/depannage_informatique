export type ContactField = {
  label: string;
  type: string;
  name: string;
  required?: boolean;
};

export const contactFields: ContactField[] = [
  { label: "Nom", type: "text", name: "name", required: true },
  { label: "Email", type: "email", name: "email", required: true },
  { label: "Téléphone", type: "tel", name: "phone", required: false },
  { label: "Message", type: "textarea", name: "message", required: true },
];
