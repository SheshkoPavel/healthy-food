import React from 'react';
import classnames from 'classnames';

interface ButtonProps {
  onClick: any;
  label: string;
  outlined?: boolean;
  animated?: boolean;
}

export const Button = (props: ButtonProps) => {
  const { onClick, label, outlined = false, animated = false } = props;

  const className = classnames('c-button', {
    'c-button--outlined': animated && outlined,
    'c-button--primary': animated && !outlined,
    'c-button--outlined-icon-style': !animated && outlined,
  })

  return (
    <div className={className} onClick={onClick}>
      <span className="c-button__label">{label}</span>
    </div>
  )
}
