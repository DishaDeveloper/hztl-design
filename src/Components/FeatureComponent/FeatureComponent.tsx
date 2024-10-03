import React from "react";
import defaultData from "./FeatureComponent.mock";
import { FeatureComponentProps } from "./FeatureComponent.types";

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

  const themesFunction = (theme: string) => {
    const styles: any = {
      primary: {
        componentBG: `bg-white text-black font-roboto ${
          variant === "LeftVariant" ? "text-left" : "text-center"
        }`,
        headingTitle: "text-gray-900",
        imageClass: "object-cover w-[100px] h-auto inline-block",
        cardTitle: "mb-2 text-xl font-bold text-gray-900 ",
        cardDescription: "text-primary-text-300",
      },
      secondary: {
        componentBG: `bg-primary-background-100 text-secondary-text-100 font-lato ${
          variant === "LeftVariant" ? "text-left" : "text-center"
        }`,
        headingTitle: "text-white",
        imageClass:
          "object-cover w-[100px] h-auto inline-block bg-white rounded-[8px]",
        cardTitle: "mb-2 text-xl font-bold dark:text-white ",
        cardDescription: "text-white",
      },
    };
    return styles[theme] || styles.primary;
  };

  const currentTheme = themeStyle();
  const themeStyles = themesFunction(currentTheme);

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
