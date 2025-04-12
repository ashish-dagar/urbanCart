import React from "react";

interface ButtonProps {
  variant?: "primary" | "outlined" | "text";
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'default' | 'warning';
  size?: "small" | "medium" | "large";
  shape?: "round" | "square" | "capsule";
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: (e: React.ButtonHTMLAttributes<HTMLButtonElement>) => void;
  isLoading?: boolean;
  children: React.ReactNode
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
  children
}) => {

  return (
    <button>{children}</button>
  )
};

export default Button;