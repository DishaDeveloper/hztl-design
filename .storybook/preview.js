// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
import '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css';
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
};
