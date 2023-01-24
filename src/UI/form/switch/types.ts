import { HTMLProps } from "react";

export interface ISwitch {
  type: "checkbox" | "radio" | "switch";
  input: HTMLProps<HTMLInputElement>;
  labelBefore: string;
  labelAfter: string;
  name: string;
}
