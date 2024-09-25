import type { Preview } from "@storybook/react";
import "../src/style/tailwind.css"; // Ensure your Tailwind CSS is imported
import React from "react";

// Define the Preview configuration

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    theme: {
      // Change to 'theme' for clarity
      name: "Theme",
      description: "Global theme for components",
      defaultValue: "primary",
      toolbar: {
        icon: "paintbrush",
        items: [
          { value: "primary", title: "Primary" },
          { value: "secondary", title: "Secondary" },
        ],
        showName: true,
      },
    },
  },
  decorators: [
    (Story: any, context) => {
      const { theme } = context.globals; // Get the selected theme
      // Update document classes based on the selected theme
      document.documentElement.classList.remove("primary", "secondary");
      document.documentElement.classList.add(theme);
      return <Story />;
    },
  ],
};

export default preview;
