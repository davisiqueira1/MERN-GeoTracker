interface IFormFieldProps {
    label: string;
    placeholder: string;
    name: string;
    readOnly?: boolean;
  }
  
  function FormField({ label, placeholder, name, readOnly }: IFormFieldProps) {
    return (
      <>
        <label className="form-label">{label}</label>
        <input
          required
          className="field"
          placeholder={placeholder}
          name={name}
          readOnly={readOnly}
        />
      </>
    );
  }
  
  export default FormField;