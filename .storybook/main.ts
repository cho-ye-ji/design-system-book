import type { StorybookConfig } from '@storybook/react-vite';

const isProd = process.env.NODE_ENV === 'production';

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    ...(isProd ? ["!../src/_private/**"] : []),
  ],
  "addons": [
    "@storybook/addon-docs",
    "@storybook/addon-a11y"
  ],
  "framework": "@storybook/react-vite",
  viteFinal: async (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/design-system-book/'
    }
    return config
  }
};
export default config;