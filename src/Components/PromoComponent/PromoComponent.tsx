import React from "react";

interface PromoComponentProps {
  componentTheme?: string;
}

export const PromoComponent: React.FC<PromoComponentProps> = ({
  componentTheme = "",
}) => {
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
        componentBG: "bg-white text-black",
        buttonColor: "bg-purple-600",
        buttonHover: "hover:bg-purple-700",
        textProperty: "font-sans",
      },
      secondary: {
        componentBG: "bg-gray-800 text-white",
        buttonColor: "bg-blue-600",
        buttonHover: "hover:bg-blue-700",
        textProperty: "font-serif",
      },
    };
    return styles[theme] || styles.primary;
  };

  const currentTheme = themeStyle();
  const themeStyles = themesFunction(currentTheme);

  return (
    <section className={`py-12 ${themeStyles.componentBG}`}>
      <div className="container mx-auto flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-8">
        {/* Image */}
        <div className="lg:w-1/2 w-full">
          <img
            src="https://dpwprod.azureedge.net/-/media/Project/DPWG/DPWG-Tenant/Corporate/Global/Images/About-Us/People-2.jpg?rev=f9ad7dad2c754bf88233899ce8f3e9a2&cx=0&cy=0&cw=560&ch=315&hash=DDEFBD7D4F141484DA5520DFF30A2B3A" // Update with actual image path
            alt="Join Our World"
            className="w-full object-cover rounded-lg shadow-md"
          />
        </div>
        {/* Text Section */}
        <div className="lg:w-1/2 w-full text-left">
          <h2 className={`text-4xl font-bold mb-4 ${themeStyles.textProperty}`}>
            JOIN OUR WORLD
          </h2>
          <p className="text-lg mb-6 leading-relaxed">
            Our dedicated team of more than 100,000 employees from over 160
            nationalities ensure the smooth flow of trade. As an equal employer
            that recognises and values diversity and an inclusive culture, we
            empower and up-skill our people with opportunities to perform at
            their best.
          </p>
          <button
            className={`text-white py-3 px-6 rounded-full transition ${themeStyles.buttonHover} ${themeStyles.buttonColor}`}
          >
            View Careers
          </button>
        </div>
      </div>
    </section>
  );
};

export default PromoComponent;
