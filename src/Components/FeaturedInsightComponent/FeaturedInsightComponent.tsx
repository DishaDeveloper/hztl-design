import React from "react";
import { FeaturedInsightComponentProps } from "./FeaturedInsightComponent.types";
import defaultData from "./FeaturedInsightComponent.mock";
import { themesFunction } from "./FeatureInsightComponent.themes";

export const FeaturedInsightComponent: React.FC<
  FeaturedInsightComponentProps
> = ({ children, componentTheme = "", variant = "" }) => {
  const FeatureInsightData = defaultData?.fields;
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

  const FeatureInsightComponentDefault = () => {
    return (
      <div className="container mx-auto">
        {/* Header */}
        <div className="lg:flex justify-between items-center mb-8">
          <h2 className={`text-4xl font-bold ${themeStyles.textProperty}`}>
            {FeatureInsightData?.headingTitle}
          </h2>
          <a
            className={`text-white py-2 px-4 rounded-lg transition block ${themeStyles.buttonHover} ${themeStyles.buttonColor}`}
            href={FeatureInsightData?.allInsightsLink?.value?.href}
            target={FeatureInsightData?.allInsightsLink?.value?.target}
          >
            {FeatureInsightData?.allInsightsLink?.value?.text}
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FeatureInsightData?.featuredInsightCard.map((insight, index) => (
            <div
              key={index}
              className={`shadow-md rounded-lg overflow-hidden ${themeStyles.cardBG} flex flex-col`}
            >
              <img
                src={insight?.fields?.image?.value?.src}
                alt={insight?.fields?.image?.value?.alt}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div className="flex flex-col justify-between flex-grow">
                  <h3
                    className={`text-lg font-bold mb-2 ${themeStyles.textProperty}`}
                  >
                    {insight?.fields?.title?.value}
                  </h3>
                  <p className={`mb-4 ${themeStyles.description}`}>
                    {insight?.fields?.description?.value}
                  </p>
                </div>
                <a
                  className={`mt-4  ${
                    variant === "Linkview"
                      ? themeStyles.LinkColor
                      : themeStyles.buttonColor
                  }`}
                  href={insight?.fields?.ReadMoreLink?.value?.href}
                  target={insight?.fields?.ReadMoreLink?.value?.target}
                >
                  {insight?.fields?.ReadMoreLink?.value?.text}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section
      className={`py-12 px-[16px] xl:px-[0]  ${themeStyles.componentBG}`}
    >
      {children ? children : <FeatureInsightComponentDefault />}
    </section>
  );
};

export default FeaturedInsightComponent;
