import { FC, MouseEvent, ReactNode } from 'react';

interface ButtonProps {
  children?: ReactNode; 
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  elemProps?: {
    baseClasses?: string;
    baseAttrs?: { [key: string]: string };
    classes?: string;
    attrs?: { [key: string]: string };
  };
}

const defaultProps: ButtonProps = {
  onClick: () => {},
  elemProps: {
    baseClasses: 'inline-flex items-center',
    baseAttrs: { type: 'button' },
    classes: 'px-2.5 py-1.5 border border-transparent text-regular font-medium rounded shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
    attrs: {},
  },
};

const Button: FC<ButtonProps> = ({ children, onClick, elemProps = defaultProps.elemProps }) => {
  return (
    <button
      className={`${elemProps?.baseClasses} ${elemProps?.classes}`}
      onClick={onClick}
      {...elemProps?.baseAttrs}
      {...elemProps?.attrs}
    >
      {children}
    </button>
  );
};

export default Button;

