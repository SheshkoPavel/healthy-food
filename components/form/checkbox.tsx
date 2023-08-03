import classNames from 'classnames';
import { useState } from 'react';

export const Checkbox = (props: any) => {
  const { renderProps, field, index } = props;
  const { onChange, onBlur, value, ...rest } = renderProps.field;
  const { setValue } = renderProps.form;
  const { rules, name, label, type = 'text', style, placeholder, caption } = field;

  const [isChecked, setIsChecked] = useState<boolean>(false);

  const onCheckboxClick = () => {
    setIsChecked(isChecked => !isChecked);
    setValue(name, !value);
  };

  const checkboxCl = classNames(
    'c-checkbox__type',
    'c-checkbox__icon',
    'c-icon',
    isChecked ? 'c-icon--checkbox-checked' : 'c-icon--checkbox-not-checked',
  );

  return (
    <div className="c-field h-margin-b-6">
      <label className="c-checkbox" onClick={onCheckboxClick}>
        <span className={checkboxCl} />
        {label}
      </label>

      <span className="c-field__caption h-margin-t-2">
        {caption}
      </span>
    </div>
  )
}
