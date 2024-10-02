import React, { ReactNode } from "react";
import defaultData from "./InformationComponent.mock";
import { InformationComponentProps } from "./InformationComponent.types";

export const InformationComponent: React.FunctionComponent<
  InformationComponentProps
> = ({ children, componentTheme = "", backgroundImage = false }) => {
  const InformationData = defaultData?.fields;
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
        componentBG: "bg-primary-bg-1 text-primary-text-200 font-roboto",
        componentBGColor: `bg-primary-background-100 text-primary-text-100`,
        textProperty: "",
        buttonColor:
          "bg-primary-button-color-2 hover:bg-primary-button-hover-color-1",
      },
      secondary: {
        componentBG: "bg-secondary-bg-1 text-secondary-text-200 font-lato",
        componentBGColor: "bg-secondary-background-100 text-secondary-text-100",
        textProperty: "",
        buttonColor:
          "bg-secondary-button-color-1 hover:bg-secondary-button-hover-color-1",
      },
    };

    return styles[theme] || styles.primary;
  };

  const currentTheme = themeStyle();
  const themeStyles = themesFunction(currentTheme);

  const InformationComponentData = () => {
    return (
      <>
        <h1
          className={`text-center text-3xl md:text-5xl font-bold mb-6 ${themeStyles.textProperty}`}
        >
          {InformationData?.headingTitle}
        </h1>
        <p
          className={`text-center text-lg md:text-xl max-w-5xl mb-8 ${themeStyles.textProperty}`}
        >
          {InformationData?.description?.value}
        </p>
        <a
          className={`text-white py-3 px-6 rounded-full text-lg  ${themeStyles?.buttonColor} `}
          href={InformationData?.promoLink?.value?.href}
        >
          {InformationData?.promoLink?.value?.text}
        </a>
      </>
    );
  };

  return (
    <div className="component work-with-us">
      <div
        className={`flex flex-col items-center justify-center py-16 px-4 bg-cover bg-center ${
          backgroundImage
            ? themeStyles.componentBG
            : themeStyles.componentBGColor
        } ${themeStyles.textProperty}`}
      >
        {children ? children : <InformationComponentData />}
      </div>
    </div>
  );
};
