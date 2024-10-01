import { createContext, useContext } from "react";
export type ThemeName = "theme";

export type ThemeFile = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key in ThemeName]: any;
};

export const ThemeContext = createContext<ThemeName>("theme");

export const useTheme = (themeFile?: ThemeFile) => {
  const themeName = useContext(ThemeContext);
  const themeData = themeFile ? themeFile[themeName] : undefined;
  return { themeName, themeData };
};
