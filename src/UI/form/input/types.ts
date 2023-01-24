import { HTMLInputTypeAttribute } from "react";

export interface IInput {
  name: string;
  labelAfter: string;
  input: React.HTMLProps<HTMLInputElement>;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  currency?: boolean;
}
