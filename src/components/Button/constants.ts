// Object is used because variants can be much more
export const buttonVariants = {
  success: 'success',
} as const;

// Object is used because sizes can be much more
export const buttonSizes = {
  m: 'm',
} as const;

export const DEFAULT_BUTTON_VARIANT = buttonVariants.success;

export const DEFAULT_BUTTON_SIZE = buttonSizes.m;
