import type { StorybookConfig } from "@storybook/react-native-web-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-react-native-server"],
  reactNativeServerOptions: {
    host: "localhost",
    port: 7007,
  },
  framework: {
    name: "@storybook/react-native-web-vite",
    options: {
      pluginReactOptions: {
        babel: {
          plugins: [["react-native-unistyles/plugin", { root: "src" }]],
        },
      },
    },
  },
};

export default config;
