import Form from "react-bootstrap/Form";

import "./CheckButton.scss";
import { ICheckButton } from "./types";

function CheckButton({
  type,
  name,
  label,
  id,
  input,
  defaultChecked,
}: ICheckButton) {
  return (
    <div className="mb-1 fw-bold">
      <Form.Check
        value={input.value}
        defaultChecked={defaultChecked}
        onChange={input.onChange}
        id={id}
        name={name}
        type={type}
        label={label}
      />
    </div>
  );
}

export default CheckButton;
