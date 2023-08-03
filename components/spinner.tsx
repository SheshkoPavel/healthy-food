import React from 'react';
import classNames from 'classnames';

type Size = 'large' | 'small' | 'x-large' | 'x-small';
type Color = 'grey' | 'white';

interface SpinnerProps {
  size?: Size;
  color?: Color;
  customClass?: string;
}

export const Spinner = ({ size, customClass, color }: SpinnerProps) => {
  const className = classNames(
    customClass,
    'c-spinner',
    size && `c-spinner--${size}`,
  );

  const itemClassName = classNames(
    'c-spinner__item',
    color && `c-spinner__item--${color}`,
  );

  return <div className="c-spinner__container">
    <div className={className}>
      <div className={itemClassName} />
      <div className={itemClassName} />
      <div className={itemClassName} />
      <div className={itemClassName} />
    </div>
  </div>;
};
