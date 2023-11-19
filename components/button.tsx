import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
const Button = ({ children, className, ...props }: Props) => {
  return (
    <>
      <button
        className={twMerge(
          "px-2 py-1 border border-black rounded-xl",
          className
        )}
        {...props}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
