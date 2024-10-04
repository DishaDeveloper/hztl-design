// Import necessary dependencies - Use either require or import, not both.
import { TOKENS } from './theme/tokens.theme';
const { mergeConfigs } = require('./theme/lib/theme-utils');

// Check if TOKENS and its properties are defined
if (!TOKENS || !TOKENS.theme || !TOKENS.theme.primary || !TOKENS.theme.secondary || !TOKENS.global) {
  throw new Error("TOKENS object or its properties are undefined. Check the structure and import of TOKENS.");
}

// Define the function to create prefixed colors wrapped inside `colors` object
const prefixTheme = (theme, prefix) => {
  const prefixedTheme = {};

  Object.keys(theme).forEach((key) => {
    if (typeof theme[key] === 'object' && !Array.isArray(theme[key])) {
      prefixedTheme[key] = prefixTheme(theme[key], prefix); // recursive for nested objects
    } else {
      prefixedTheme[`${prefix}-${key}`] = theme[key];
    }
  });

  return prefixedTheme;
};

// Create prefixed colors wrapped inside `colors`
const primaryTheme = prefixTheme(TOKENS.theme.primary, 'primary');
const secondaryTheme = prefixTheme(TOKENS.theme.secondary, 'secondary');

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
