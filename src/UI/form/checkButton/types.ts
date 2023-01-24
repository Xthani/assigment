export interface ICheckButton {
  name: string;
  input: React.HTMLProps<HTMLInputElement>;
  type: "checkbox" | "radio" | "switch";
  defaultChecked?: boolean;
  label?: string;
  id?: string;
}
