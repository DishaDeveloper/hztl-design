export const themesFunction = (theme: string, variant:string) => {
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
        componentBG: `bg-secondary-background-100 text-secondary-text-100 font-lato ${
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