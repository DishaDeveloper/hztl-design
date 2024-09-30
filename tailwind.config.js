// Import necessary dependencies - Use either require or import, not both.
import { TOKENS } from './theme/tokens.theme';
const { mergeConfigs } = require('./theme/lib/theme-utils');

// Check if TOKENS and its properties are defined
if (!TOKENS || !TOKENS.theme || !TOKENS.theme.primary || !TOKENS.theme.secondary || !TOKENS.global) {
  throw new Error("TOKENS object or its properties are undefined. Check the structure and import of TOKENS.");
}

// Define the function to create prefixed colors wrapped inside `colors` object
const createPrefixedColors = (prefix, colors) => {
  const prefixedColors = {};
  Object.keys(colors).forEach(key => {
    prefixedColors[`${prefix}-${key}`] = colors[key];
  });
  return { colors: prefixedColors };
};

// Create prefixed colors wrapped inside `colors`
const primaryTheme = TOKENS.theme.primary;
const secondaryTheme = TOKENS.theme.secondary;

// Merge the primary and secondary prefixed colors under the same `colors` key
const MERGEDTOKENSTHEME = mergeConfigs(primaryTheme, secondaryTheme);

// Merge global tokens with the merged theme colors
const MERGEDTOKENS = mergeConfigs(TOKENS.global, MERGEDTOKENSTHEME);

// Tailwind configuration
const theme = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/**/*.html"], // Include all relevant paths
  theme: {
    extend: {
      ...MERGEDTOKENS
    }
  },
  plugins: [],
};



module.exports = theme; // Use CommonJS export style for Tailwind config.
