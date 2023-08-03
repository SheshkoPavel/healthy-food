export const TextArea = (props: any) => {
  const { renderProps, field } = props;
  const { onChange, onBlur, value, ...rest } = renderProps.field;
  const { rules, name, label, type = 'text', style } = field;

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <span>{label}</span>
      <textarea
        className="c-textarea"
        onBlur={onBlur}
        onChange={onChange}
        value={value || ''}
        style={ style || {
          // borderColor: error ? 'red' : '',
          // marginLeft: '1rem'
        }}
      />
    </div>
  )
}
