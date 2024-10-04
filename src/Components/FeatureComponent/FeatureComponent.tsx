import React from "react";
import defaultData from "./FeatureComponent.mock";
import { FeatureComponentProps } from "./FeatureComponent.types";
import { themesFunction } from "./FeatureComponent.themes";

export const FeatureComponent: React.FC<FeatureComponentProps> = ({
  children,
  componentTheme = "",
  variant = "centerVariant",
}) => {
  const componentData = defaultData?.fields?.featureCard;

  const themeStyle = () => {
    if (typeof document !== "undefined") {
      return document.documentElement.classList.contains("primary")
        ? "primary"
        : "secondary";
    }
    return componentTheme !== "" ? componentTheme : "primary";
  };

  const currentTheme = themeStyle();
  const themeStyles = themesFunction(currentTheme, variant);

  const FeatureComponentDefault = () => {
    return (
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mb-8 lg:mb-16">
          <h2
            className={`text-4xl font-bold leading-snug ${themeStyles?.headingTitle}`}
          >
            {defaultData?.fields?.headingTitle}
          </h2>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          {componentData?.map((data, index) => {
            return (
              <div key={index} className={themeStyles?.imageContainer}>
                <div className="mb-[20px]">
                  <img
                    src={data?.fields?.image?.value?.src}
                    alt={data?.fields?.image?.value?.alt}
                    height={data?.fields?.image?.value?.height}
                    width={data?.fields?.image?.value?.width}
                    className={themeStyles?.imageClass}
                  />
                </div>
                <h3
                  className={`text-lg mb-2 text-bold ${themeStyles?.cardTitle}`}
                >
                  {data?.name}
                </h3>
                <p className={themeStyles?.cardDescription}>
                  {data?.fields?.description?.value}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <section className={themeStyles?.componentBG}>
      {children ? children : <FeatureComponentDefault />}
    </section>
  );
};
