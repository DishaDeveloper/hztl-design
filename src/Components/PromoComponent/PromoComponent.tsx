import React from "react";
import defaultData from "./PromoComponent.mock";
import { PromoComponentProps } from "./PromoComponent.types";

export const PromoComponent: React.FC<PromoComponentProps> = ({
  children,
  componentTheme = "",
  variant = "LeftImage",
}) => {
  const ProdoData = defaultData?.fields;
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
        componentWrapper: "bg-white text-black font-roboto",
        imageClass: "w-full object-cover rounded-lg shadow-md",
        headingClass: "text-4xl font-bold mb-4",
        descriptionClass: "text-lg mb-6 leading-relaxed",
        LinkClass:
          "text-white py-3 px-6 rounded-full transition bg-primary-button-color-1 hover:bg-primary-button-hover-color-1",
      },
      secondary: {
        componentWrapper: "bg-primary-background-100 text-white font-lato",
        imageClass: "w-full object-cover rounded-lg shadow-md",
        headingClass: "text-4xl font-bold mb-4",
        descriptionClass: "text-lg mb-6 leading-relaxed",
        LinkClass:
          "text-white py-3 px-6 rounded-full transition bg-secondary-button-color-1 hover:bg-secondary-button-hover-color-1",
      },
    };
    return styles[theme] || styles.primary;
  };

  const currentTheme = themeStyle();
  const themeStyles = themesFunction(currentTheme);

  const DefaultComponent = () => {
    return (
      <>
        <div className="lg:w-1/2 w-full">
          <img
            src={ProdoData?.image?.value?.src} // Update with actual image path
            alt="Join Our World"
            className={themeStyles?.imageClass}
          />
        </div>
        {/* Text Section */}
        <div className="lg:w-1/2 w-full text-left">
          <h2 className={themeStyles?.headingClass}>
            {ProdoData?.headingTitle}
          </h2>
          <p className={themeStyles?.descriptionClass}>
            {ProdoData?.description?.value}
          </p>
          <a
            className={themeStyles?.LinkClass}
            href={ProdoData?.promoLink?.value?.href}
            target={ProdoData?.promoLink?.value?.target}
          >
            {ProdoData?.promoLink?.value?.text}
          </a>
        </div>
      </>
    );
  };

  return (
    <section className={`py-12 ${themeStyles.componentWrapper}`}>
      <div
        className={`container mx-auto flex flex-col ${
          variant === "RightImage" ? "lg:flex-row-reverse" : "lg:flex-row "
        } items-center space-y-6 lg:space-y-0 gap-x-[24px]`}
      >
        {children ? children : <DefaultComponent />}
      </div>
    </section>
  );
};

export default PromoComponent;
