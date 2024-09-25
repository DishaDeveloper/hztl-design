
# hztl-design

A React-based design system package with Storybook integration, built using Rollup and Tailwind CSS.

## Table of Contents
- [Installation](#installation)
- [Features](#features)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Build Setup](#build-setup)
- [Contributing](#contributing)
- [License](#license)

## Installation

Install the necessary dependencies by running:

```bash
npm install
```

## Features
- **React 18**: The latest version of React for building components.
- **Storybook 8**: Interactive environment for UI component development and testing.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Rollup**: Bundler for optimized production builds.
- **TypeScript**: Type definitions for better developer experience.

## Getting Started

After installation, you can start the development server and view Storybook components using:

```bash
npm start
```

This will start Storybook on port `6006`. You can visit it in the browser at `http://localhost:6006`.

## Scripts

- **`npm start`**: Starts the Storybook development server.
- **`npm run build`**: Builds the project using Rollup and TypeScript, along with Tailwind CSS minification.
- **`npm run build-storybook`**: Builds a static version of the Storybook for deployment.
- **`npm run build-tailwind`**: Generates and minifies Tailwind CSS output.

## Build Setup

The build pipeline uses Rollup for bundling and Tailwind CSS for styling. TypeScript is also integrated for type-checking.

### Rollup

We use `rollup.config.js` for bundling:
- **CommonJS** and **Node Resolve** plugins are used to handle module imports.
- **Terser** is applied for minification in production builds.

### Tailwind CSS

Tailwind is configured with a source file located at `src/style/tailwind.css` and the output is minified and saved in `dist/styles.css`:

```bash
npx tailwindcss -i ./src/style/tailwind.css -o ./dist/styles.css --minify
```

## Contributing

Contributions are welcome! Please create an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the ISC License. See the [LICENSE](./LICENSE) file for more details.
