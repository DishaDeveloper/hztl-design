import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

interface MyComponentProps {
  className?: string; // Additional Tailwind classes
}

export const MyComponent: React.FC<MyComponentProps> = ({ className = "" }) => {
  const baseStyle = "py-2 px-4 rounded"; // Base styles
  const [themeStyleDynamic, setThemeStyleDynamic] = useState<string>(""); // State for theme styles

  const themeStyle = () => {
    if (typeof document !== "undefined") {
      return document?.documentElement?.classList?.contains("secondary")
        ? "bg-gray-500 hover:bg-gray-700 text-white" // Secondary styles
        : "bg-blue-500 hover:bg-blue-700 text-white";
    } else {
      const isSecondary = className.includes("secondary");
      return isSecondary
        ? "bg-gray-500 hover:bg-gray-700 text-white" // Secondary styles
        : "bg-blue-500 hover:bg-blue-700 text-white";
    }
  };

  useEffect(() => {
    // Determine the theme style based on the className prop
    const isSecondary = className.includes("secondary");
    setThemeStyleDynamic(
      isSecondary
        ? "bg-gray-500 hover:bg-gray-700 text-white" // Secondary styles
        : "bg-blue-500 hover:bg-blue-700 text-white"
    ); // Primary styles
  }, [className]);

  // Merge styles using tailwind-merge
  const mergedClasses = twMerge(
    `${baseStyle} ${themeStyle() || themeStyle}`,
    className
  );

  return <div className={mergedClasses}>Hello, Tailwind CSS!</div>;
};
