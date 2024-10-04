export const themesFunction = (theme: string) => {
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