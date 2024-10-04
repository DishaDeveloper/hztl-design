export  const themesFunction = (theme: string) => {
    const styles: any = {
      primary: {
        componentBG: "text-black font-roboto",
        buttonColor:
          "bg-primary-button-color-1 hover:bg-primary-button-hover-color-1 text-white py-2 px-4 rounded-lg transition text-center",
        LinkColor: "text-black hover:text-primary-button-hover-color-1",
        cardBG: "bg-white",
        description: "text-primary-text-300 text-[14px]",
      },
      secondary: {
        componentBG:
          "bg-primary-background-100 text-primary-text-100 text-white font-lato",
        cardBG: "bg-secondary-background-400",
        LinkColor: "text-white hover:text-secondary-button-hover-color-1",
        buttonColor:
          "bg-secondary-button-color-1 hover:bg-secondary-button-hover-color-1 text-white py-2 px-4 rounded-lg transition text-center",
        description: "text-white text-[14px]",
      },
    };
    return styles[theme] || styles.primary;
  };