import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-docs",
    "@storybook/addon-a11y"
  ],
  "framework": "@storybook/react-vite",
  viteFinal: async (config) => {
    config.base = '/design-system-book/'
    return config
  }
};
export default config;