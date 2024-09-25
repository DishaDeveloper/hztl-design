import React from "react";
import { twMerge } from "tailwind-merge"; // Import tailwind-merge

interface MyComponentProps {
  className?: string; // Additional Tailwind classes
}

export const MyComponent: React.FC<MyComponentProps> = ({ className = "" }) => {
  const baseStyle = "py-2 px-4 rounded"; // Base styles
  const themeStyle = document?.documentElement?.classList?.contains("secondary")
    ? "bg-gray-500 hover:bg-gray-700 text-white" // Secondary styles
    : "bg-blue-500 hover:bg-blue-700 text-white"; // Primary styles

  // Merge styles using tailwind-merge
  const mergedClasses = twMerge(`${baseStyle} ${themeStyle}`, className);

  return <div className={mergedClasses}>Hello, Tailwind CSS!</div>;
};
