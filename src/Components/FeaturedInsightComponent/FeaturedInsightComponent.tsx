import React from "react";

interface Insight {
  title: string;
  description: string;
  imageUrl: string;
}

interface FeaturedInsightsProps {
  componentTheme?: string;
}

const insightsData: Insight[] = [
  {
    title:
      "From e-commerce to AI – 5 trends shaping Oceania’s retail and consumer sector in 2024",
    description:
      "As ongoing economic uncertainty and rising costs of living reshape buyer behaviour, Oceania’s supply chains are being put to the test in new ways.",
    imageUrl:
      "https://dpwprod.azureedge.net/-/media/Project/DPWG/DPWG-Tenant/Corporate/Global/Images/Expert-Opinions/Cold-room-storage.jpg?rev=650ea70848ab46d8bc6584d7df1f43f7&cx=0.47&cy=0.43&cw=675&ch=380&hash=3E7D834BEA39CC85947F867D5FEAAA56", // Update with your actual image path
  },
  {
    title:
      "Southeast Asia is growing as a global trade nexus – and its emerging markets have an important role",
    description:
      "From a small base, Southeast Asia has grown to become one of the world’s most dynamic trading areas over the past three decades.",
    imageUrl:
      "https://dpwprod.azureedge.net/-/media/Project/DPWG/DPWG-Tenant/Corporate/Global/Images/Expert-Opinions/Woman-working-in-automations-and-robotics.jpg?rev=be4997a0fdf04133a39c0c0a6f9c81eb&cx=0.46&cy=0.57&cw=675&ch=380&hash=4A99108DBFE73BB835B13899EE49733A",
  },
  {
    title: "Changing the Perception of Water",
    description:
      "Water is crucial for life on Earth and vital for our well-being. Businesses, including ours, can play a significant role in changing how water is used.",
    imageUrl:
      "https://dpwprod.azureedge.net/-/media/Project/DPWG/DPWG-Tenant/Corporate/Global/Images/Whitepapers/Boat-on-a-river-surrounded-by-palm-trees.jpg?rev=2fdab677606c4587b0b74099d3c10a59&cx=0.49&cy=0.49&cw=675&ch=380&hash=9EDADB5ABB4B9FBFA4D63BF9CA8B31EE",
  },
  {
    title: "Empowering Humanitarian Logistics Resilience",
    description:
      "As the world faces increasing and unprecedented challenges, humanitarian logistics is the central element of crisis response when supply chains are disrupted.",
    imageUrl:
      "https://dpwprod.azureedge.net/-/media/Project/DPWG/DPWG-Tenant/Corporate/Global/Images/All-Insights/whitepapers/Humanitarian-logistics/Truck-on-the-road-on-the-route.jpg?rev=855c46febd204fc7a67f421bba7f5dfb&cx=0.42&cy=0.74&cw=675&ch=380&hash=35133BBDB983C0B59A7FB1112CAF9441",
  },
];

export const FeaturedInsightComponent: React.FC<FeaturedInsightsProps> = ({
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
        cardBG: "bg-white",
        textProperty: "font-sans",
      },
      secondary: {
        componentBG: "bg-gray-800 text-white",
        buttonColor: "bg-blue-600",
        buttonHover: "hover:bg-blue-700",
        cardBG: "bg-gray-700",
        textProperty: "font-serif",
      },
    };
    return styles[theme] || styles.primary;
  };

  const currentTheme = themeStyle();
  const themeStyles = themesFunction(currentTheme);

  return (
    <section className={`py-12 ${themeStyles.componentBG}`}>
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className={`text-4xl font-bold ${themeStyles.textProperty}`}>
            FEATURED INSIGHTS
          </h2>
          <button
            className={`text-white py-2 px-4 rounded-lg transition ${themeStyles.buttonHover} ${themeStyles.buttonColor}`}
          >
            See All Insights
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {insightsData.map((insight, index) => (
            <div
              key={index}
              className={`shadow-md rounded-lg overflow-hidden ${themeStyles.cardBG} flex flex-col`}
            >
              <img
                src={insight.imageUrl}
                alt={insight.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div className="flex flex-col justify-between flex-grow">
                  <h3
                    className={`text-lg font-bold mb-2 ${themeStyles.textProperty}`}
                  >
                    {insight.title}
                  </h3>
                  <p className="text-gray-500 mb-4">{insight.description}</p>
                </div>
                <button
                  className={`mt-4 text-white py-2 px-4 rounded-lg transition ${themeStyles.buttonHover} ${themeStyles.buttonColor}`}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedInsightComponent;
