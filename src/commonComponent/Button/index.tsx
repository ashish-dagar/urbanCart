import React from "react";
import classNames from "classnames";

import * as styles from "./button.module.scss";

interface ButtonProps {
  variant?: "primary" | "outlined" | "text";
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'default' | 'warning';
  size?: "small" | "medium" | "large";
  shape?: "round" | "square" | "capsule";
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isLoading?: boolean;
  children: React.ReactNode;
  className?: string;
  "aria-label"?: string;
  "aria-haspopup"?: string;
}
const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  color = "primary",
  size = "medium",
  shape = "round",
  disabled = false,
  fullWidth = false,
  onClick,
  isLoading = false,
  children,
  className,
  ...rest
}) => {
  const btnClass = classNames(
    styles.btn,
    styles[variant],
    styles[size],
    styles[color],
    {
      [styles.block]: fullWidth,
      [styles.disabled]: disabled || isLoading,
    },
    className
  );
  return (
    <button
      className={btnClass}
      onClick={disabled || isLoading ? undefined : onClick}
    >
      {isLoading ? <span className="loader" /> : children}
    </button>
  )
};

export default Button;