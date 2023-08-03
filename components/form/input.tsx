export const Input = (props: any) => {
  const { renderProps, field, index, errorMessage } = props;
  const { onChange, onBlur, value, ...rest } = renderProps.field;
  const { rules, name, label, type = 'text', style, placeholder, caption, className='', disabled } = field;

  return (
    <div className={errorMessage ? 'c-field h-margin-b-6' : `c-field ${className}`}>
      <label
        htmlFor={`input-id-${index}`}
        className={errorMessage ? 'c-field__label c-field__label--error' : 'c-field__label h-margin-b-2'}
      >
        {label}
      </label>
      <input
        id={`input-id-${index}`}
        className="c-input"

        type={type}
        onBlur={onBlur}
        onChange={onChange}
        disabled={disabled}
        value={value || ''}
        style={ style || {
          // borderColor: error ? 'red' : '',
        }}
        placeholder={placeholder}
      />
      <span className={errorMessage ? 'c-field__caption c-field__caption--error' : 'c-field__caption'}>
        {errorMessage ? errorMessage : caption} {/* TODO show message when error from server response coming */}
      </span>
    </div>
  )
}
