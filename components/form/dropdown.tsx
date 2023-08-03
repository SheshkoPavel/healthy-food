import { BaseDropdown } from '@/components';

export const Dropdown = (props: any) => {
  const { renderProps, field } = props;
  const { onChange, onBlur, value, ...rest } = renderProps.field;
  const { rules, name, label, type = 'text', options } = field;

  return (
    <div style={{ display: 'flex' }}>
      <span>{label}</span>
      <BaseDropdown
        onChange={(e: any) => onChange(e.value)}
        options={options}
        value={value}
        inputId={`inputId-form-${name}`}
        instanceId={`instanceId-form-${name}`}
      />
    </div>
  )
}
