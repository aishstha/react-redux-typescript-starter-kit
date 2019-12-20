import * as React from 'react';

interface ITextFieldProps {
  type: string;
  name: string;
  value: string;
  label: string;
  disabled?: boolean;
  className?: string;
  onBlur: () => void;
  placeholder?: string;
  errorMessage: string;
  onChange: () => void;
  touchedValue: string;
  col: string;
  required: boolean;
}
const TextField: React.SFC<ITextFieldProps> = ({
  type = ' text',
  name,
  value,
  label,
  onBlur,
  disabled = false,
  onChange,
  placeholder = '',
  touchedValue,
  errorMessage,
  className,
  col = '',
  required = false
}) => {
  return (
    <div
    // className={classnames(`form-group ${col}`, {
    //     error: errorMessage && (touchedValue || value)
    // })}
    >
      <label>{label}</label>
      <input
        type={type || 'text'}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        // className={}
        disabled={disabled}
        required={required}
      />
      {(errorMessage && (touchedValue || value) && <span className="form-group__error-msg">{errorMessage}</span>) || (
        <span className="form-group__error-msg" style={{ display: 'block', opacity: 0 }}>
          &nbps;
        </span>
      )}
    </div>
  );
};

export default TextField;
