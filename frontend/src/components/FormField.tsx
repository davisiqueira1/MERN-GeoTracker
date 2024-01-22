import { ChangeEventHandler } from "react";
import "./FormField.css";

interface IFormFieldProps {
  label: string;
  placeholder?: string;
  name: string;
  readOnly?: boolean;
  value?: number;
  type?: string;
  step?: number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

function FormField({
  label,
  placeholder,
  name,
  readOnly,
  value,
  type,
  step,
  onChange,
}: IFormFieldProps) {
  return (
    <>
      <label className="form-label">{label}</label>
      <input
        required
        className="field"
        type={type || "text"}
        step={step}
        placeholder={placeholder}
        name={name}
        readOnly={readOnly}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default FormField;
