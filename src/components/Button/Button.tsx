import clsx from 'clsx';

import { DEFAULT_BUTTON_SIZE, DEFAULT_BUTTON_VARIANT } from './constants';
import { ButtonProps } from './types';

import classes from './styles/index.module.css';

export const Button = ({
  size = DEFAULT_BUTTON_SIZE,
  variant = DEFAULT_BUTTON_VARIANT,
  children,
  buttonClassName,
}: ButtonProps) => {
  const buttonClassNames = clsx(
    classes.button,
    buttonClassName,
    classes[`button_${size}`],
    classes[`button_${variant}`],
  );

  return <button className={buttonClassNames}>{children}</button>;
};
