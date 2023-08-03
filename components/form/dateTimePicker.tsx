import { DatePicker } from '@/components/datepicker';

export const DateTimePicker = (props: any) => {
  const { renderProps, field } = props;
  const { onChange, onBlur, value, ...rest } = renderProps.field;
  const { rules, name, label, type = 'text' } = field;

  return (
    <div style={{ display: 'flex' }}>
      <span>{label}</span>
      <DatePicker onChange={onChange} selected={value} showTimeSelect={true} dateFormat={'MM/dd/yyyy hh:mm:ss a'} timeIntervals={10} />
    </div>
  )
}
