import { ThemeType } from "../../types/common";

interface AccordionTheme {
  componentBG: string;
  headingTitle: string;
  description: string;
  accordionContainer: string;
  accordionItem: string;
  accordionHeader: string;
  accordionTitle: string;
  accordionIcon: string;
  accordionContent: string;
  accordionContentText: string;
}

export const themesFunction = (theme: ThemeType): AccordionTheme => {
  const themes: Record<ThemeType, AccordionTheme> = {
    primary: {
      componentBG: "bg-white",
      headingTitle: "text-gray-900",
      description: "text-gray-600",
      accordionContainer: "space-y-4",
      accordionItem: "border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200",
      accordionHeader: "flex justify-between items-center w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset transition-colors duration-200",
      accordionTitle: "text-lg font-medium text-gray-900",
      accordionIcon: "w-5 h-5 text-gray-500 transform transition-transform duration-200",
      accordionContent: "px-6 py-4 bg-white border-t border-gray-200",
      accordionContentText: "text-gray-700 leading-relaxed"
    },
    secondary: {
      componentBG: "bg-gray-900",
      headingTitle: "text-white",
      description: "text-gray-300",
      accordionContainer: "space-y-4",
      accordionItem: "border border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200",
      accordionHeader: "flex justify-between items-center w-full px-6 py-4 text-left bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-inset transition-colors duration-200",
      accordionTitle: "text-lg font-medium text-white",
      accordionIcon: "w-5 h-5 text-gray-400 transform transition-transform duration-200",
      accordionContent: "px-6 py-4 bg-gray-800 border-t border-gray-700",
      accordionContentText: "text-gray-300 leading-relaxed"
    }
  };

  return themes[theme] || themes.primary;
};
