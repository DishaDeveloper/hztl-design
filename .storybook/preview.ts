import type { Preview } from '@storybook/react';
import './tailwind.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    globalTypes: {
      stylesheets: {
        themes: [
          {
            id: "primary-theme",
            title: "Primary theme",
            url: "./primary-theme.css",
          },
          {
            id: "secondary-theme",
            title: "Secondary theme",
            url: "./secondary-theme.css",
          },
          {
            id: "tertiary-theme",
            title: "Tertiary theme",
            url: "./tertiary-theme.css",
          },
        ],
      },
    },
  },
};

export default preview;
