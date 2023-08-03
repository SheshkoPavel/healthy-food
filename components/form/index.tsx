import { useEffect, useRef } from 'react';
import { useForm, Controller, Validate } from 'react-hook-form';

import { Input } from './input';
import { Datepicker } from './datepicker';
import { Dropdown } from './dropdown';
import { TextArea } from './textarea';
import { DateTimePicker } from './dateTimePicker';
import { Checkbox } from './checkbox';

const defaultRender = (renderProps: any) => {
  const { field, form, fieldSettings, index } = renderProps;
  const { handleSubmit, control, reset, formState: { errors }, } = form;
  const { rules, name, label, type = 'text', placeholder = '', caption='', className='' } = fieldSettings;

  const { onChange, onBlur, value, ...rest } = field;

  const error = (errors)[name];
  const { message } = error || {};

  return (
    <>
      {['text', 'password', 'email', 'tel'].includes(type) && <Input renderProps={renderProps} field={fieldSettings} index={index} errorMessage={message} />}
      {type === 'datepicker' && <Datepicker renderProps={renderProps} field={fieldSettings} errorMessage={message} />}
      {type === 'datetimepicker' && <DateTimePicker renderProps={renderProps} field={fieldSettings} />}
      {type === 'dropdown' && <Dropdown renderProps={renderProps} field={fieldSettings} />}
      {type === 'textarea' && <TextArea renderProps={renderProps} field={fieldSettings} />}
      {type === 'checkbox' && <Checkbox renderProps={renderProps} field={fieldSettings} />}
    </>
  )
}

const getRender = ({ form, fieldSettings, index }: any, renderFn: any) => (renderProps: any) => {
  return renderFn({ ...renderProps, form, fieldSettings, index })
}

export const Form = (props: any) => {
  const submitRef = useRef<any>();
  const {
    formRef,
    fields,
    onSubmit,
    className = null,
  } = props;

  const form = useForm<any>({
    defaultValues: props.defaultValues || {},
  });

  const { handleSubmit, control, reset, formState: { errors }, } = form;

  useEffect(() => {
    formRef.current.submit = () => submitRef.current.click();
    formRef.current.reset = () => reset();
  }, []);

  return (
    <form className={className} onSubmit={handleSubmit(onSubmit) as any}>
      {
        fields.map((fieldSettings: any, index: number) => {
          const { rules, name, label, type = 'text', render = defaultRender } = fieldSettings;

          return (
            <Controller
              key={name}
              name={name}
              control={control}
              rules={rules}
              render={getRender({ form, fieldSettings, index }, render)}
            />
          )
        })
      }

      <input ref={submitRef} style={{ display: 'none' }} type="submit" />
    </form>
  );
}
