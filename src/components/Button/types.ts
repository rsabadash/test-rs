import { PropsWithChildren } from 'react';

import { buttonSizes, buttonVariants } from './constants';

export type ButtonVariant = keyof typeof buttonVariants;

export type ButtonSize = keyof typeof buttonSizes;

export type ButtonProps = PropsWithChildren<{
  size?: ButtonSize;
  variant?: ButtonVariant;
  buttonClassName?: string;
}>;
