// import { DatePickerSimple } from '../dynamicPages/templates/t2-dynamic/sections/listing/filters/datepicker';

export const Datepicker = (props: any) => {
  const { renderProps, field, errorMessage } = props;
  const { onChange, onBlur, value, ...rest } = renderProps.field;
  const { rules, name, label, type = 'text', dateFormat, caption } = field;

  return (
    <div className={'c-field h-margin-b-6'}>
      <span className={errorMessage ? 'c-field__label c-field__label--error' : 'c-field__label h-margin-b-2'}>
        {label}
      </span>

      {/* <DatePickerSimple onChange={onChange} value={value} /> */}

      <span className={errorMessage ? 'c-field__caption c-field__caption--error' : 'c-field__caption'}>
        {errorMessage ? errorMessage : caption} {/* TODO show message when error from server response coming */}
      </span>
    </div>
  )
}
