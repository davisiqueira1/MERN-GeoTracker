interface IFormFieldProps {
  label: string;
  placeholder?: string | undefined;
  name: string;
  readOnly?: boolean;
  value?: number | undefined;
}

function FormField({
  label,
  placeholder,
  name,
  readOnly,
  value,
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
      />
    </>
  );
}

export default FormField;
