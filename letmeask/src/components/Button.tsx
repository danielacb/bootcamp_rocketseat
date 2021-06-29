import { ButtonHTMLAttributes } from "react";

import "../styles/button.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  small?: boolean;
};

export function Button({ variant, small, ...props }: ButtonProps) {
  return (
    <button
      className={`btn ${small && "small"} ${variant ? variant : "primary"}`}
      {...props}
    ></button>
  );
}
