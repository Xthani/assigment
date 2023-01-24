import "./Input.scss";
import { IInput } from "./types";

function Input({ labelAfter, currency, ...props }: IInput) {
  return (
    <div className="d-flex align-items-center w-100">
      <input
        {...props}
        value={props.input.value}
        onChange={props.input.onChange}
        className="input w-100 mx-2"
      />
      <div className="fw-bold fs-small text-nowrap">{labelAfter}</div>
    </div>
  );
}

export default Input;
