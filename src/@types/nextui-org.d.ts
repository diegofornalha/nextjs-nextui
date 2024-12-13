declare module '@nextui-org/react' {
  import { ComponentProps } from 'react';

  export interface ButtonProps extends ComponentProps<'button'> {
    isIconOnly?: boolean;
    variant?: 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow';
    color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
    children?: React.ReactNode;
  }

  export interface InputProps extends ComponentProps<'input'> {
    variant?: 'flat' | 'bordered' | 'faded' | 'underlined';
    endContent?: React.ReactNode;
    classNames?: {
      input?: string;
      inputWrapper?: string;
    };
  }

  export interface CardProps extends ComponentProps<'div'> {
    className?: string;
    children?: React.ReactNode;
    onClick?: () => void;
  }

  export const Button: React.FC<ButtonProps>;
  export const Input: React.FC<InputProps>;
  export const Card: React.FC<CardProps>;
  export const nextui: () => any;
}

declare module 'tailwindcss' {
  export interface Config {
    content: string[];
    theme?: {
      extend?: Record<string, any>;
    };
    plugins?: any[];
    darkMode?: 'class' | 'media';
  }
} 