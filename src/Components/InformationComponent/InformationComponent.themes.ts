export const themesFunction = (theme: string) => {
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
