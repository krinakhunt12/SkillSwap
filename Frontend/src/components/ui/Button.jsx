import React from "react";

export const Button = ({
  children,
  className = "",
  variant = "default",
  ...props
}) => {
  const baseStyles =
    "px-4 py-2 rounded-xl font-medium focus:outline-none transition";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 text-gray-800 hover:bg-gray-100",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
