import React from 'react';
import classNames from 'classnames';

export const RichText = ({ text, className, style }: any) => {

  const richTextCl = classNames(
    'c-rich-text',
    className && className
  );
  return <div className={richTextCl} style={style} dangerouslySetInnerHTML={{ __html: text }} />;
};
