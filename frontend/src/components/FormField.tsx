import { ChangeEventHandler } from "react";

interface IFormFieldProps {
  label: string;
  placeholder?: string | undefined;
  name: string;
  readOnly?: boolean;
  value?: number | undefined;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

function FormField({
  label,
  placeholder,
  name,
  readOnly,
  value,
  onChange,
}: IFormFieldProps) {
  return (
    <>
      <label className="form-label">{label}</label>
      <input
        required
        className="field"
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
