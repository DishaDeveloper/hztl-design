import React from "react";
import defaultData from "./PromoComponent.mock";
import { PromoComponentProps } from "./PromoComponent.types";
import { themesFunction } from "./PromoComponent.themes";

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
