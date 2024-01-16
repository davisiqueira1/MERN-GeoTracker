import { ChangeEventHandler } from "react";

interface IFormFieldProps {
  label: string;
  placeholder?: string;
  name: string;
  readOnly?: boolean;
  value?: number;
  type?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

function FormField({
  label,
  placeholder,
  name,
  readOnly,
  value,
  type,
  onChange,
}: IFormFieldProps) {
  return (
    <>
      <label className="form-label">{label}</label>
      <input
        required
        className="field"
        type={type || "text"}
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
