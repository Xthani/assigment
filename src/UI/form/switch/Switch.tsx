import CheckButton from "../checkButton/CheckButton";

import "./Switch.scss";
import { ISwitch } from "./types";

function Switch({ type, name, labelAfter, labelBefore, ...props }: ISwitch) {
  const switchValue = props.input.value;

  return (
    <div className="d-flex switch__container">
      <p className={`fw-bold ${!switchValue && "text-muted"} fs-small`}>
        {labelBefore}
      </p>
      <div className="mx-2">
        <CheckButton {...props} name={name} input={props.input} type={type} />
      </div>
      <p className={`fw-bold ${switchValue && "text-muted"} fs-small`}>
        {labelAfter}
      </p>
    </div>
  );
}

export default Switch;
