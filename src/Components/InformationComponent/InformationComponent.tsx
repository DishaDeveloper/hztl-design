import React, { ReactNode } from "react";

interface InformationComponentProps {
  children?: ReactNode;
  componentTheme?: string;
  backgroundImage?: boolean;
}

export const InformationComponent: React.FunctionComponent<
  InformationComponentProps
> = ({ children, componentTheme = "", backgroundImage = false }) => {
  const themeStyle = () => {
    if (typeof document !== "undefined") {
      return document.documentElement.classList.contains("primary")
        ? "primary"
        : "secondary";
    }
    return componentTheme !== "" ? componentTheme : "primary";
  };

  const themesFunction = (theme: string) => {
    const styles: any = {
      primary: {
        componentBG: "bg-primary-bg-1 text-primary-text-200",
        componentBGColor: `bg-primary-background-100 text-primary-text-100`,
        textProperty: "font-roboto",
        buttonColor: "bg-primary-button-color-1",
        buttonHover: "hover:bg-primary-button-hover-color-1",
      },
      secondary: {
        componentBG: "bg-secondary-bg-1 text-secondary-text-200",
        componentBGColor: "bg-secondary-background-100 text-secondary-text-100",
        textProperty: "font-Lora",
        buttonColor: "bg-secondary-button-color-1",
        buttonHover: "hover:bg-secondary-button-hover-color-1",
      },
    };

    return styles[theme] || styles.primary;
  };

  const currentTheme = themeStyle();
  const themeStyles = themesFunction(currentTheme);

  const InformationComponentData = () => {
    return (
      <div
        className={`flex flex-col items-center justify-center py-16 px-4 bg-cover bg-center ${
          backgroundImage
            ? themeStyles.componentBG
            : themeStyles.componentBGColor
        } ${themeStyles.textProperty}`}
      >
        <h1
          className={`text-center text-3xl md:text-5xl font-bold mb-6 ${themeStyles.textProperty}`}
        >
          CHANGING WHAT'S POSSIBLE, FOR EVERYONE
        </h1>
        <p
          className={`text-center text-lg md:text-xl max-w-2xl mb-8 ${themeStyles.textProperty}`}
        >
          Trade is the lifeblood of the global economy, creating opportunities
          and improving the quality of life for people around the world. DP
          World exists to make the world’s trade flow better, changing what’s
          possible for the customers and communities we serve globally.
        </p>
        <button
          className={`text-white py-3 px-6 rounded-full text-lg ${themeStyles?.buttonHover} ${themeStyles?.buttonColor} `}
        >
          Learn More About Us
        </button>
      </div>
    );
  };

  return (
    <div className="component work-with-us">
      {children ? children : <InformationComponentData />}
    </div>
  );
};
