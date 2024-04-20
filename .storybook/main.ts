import type { StorybookConfig } from '@storybook/nextjs';
import path from "path";

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    "@storybook/addon-styling",
    {
      name: '@storybook/addon-styling',
      options: {},
    },
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: (config) => {
    (config.resolve as any).alias = {
      ...(config.resolve as any).alias,
      '@': path.resolve(__dirname, `${process.cwd()}/src`),
    };

    return config
  }
};
export default config;