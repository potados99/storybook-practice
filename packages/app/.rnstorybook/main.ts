import type { StorybookConfig } from "@storybook/react-native";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-ondevice-controls",
    "@storybook/addon-ondevice-actions",
    "@storybook/addon-react-native-server",
  ],
  reactNativeServerOptions: {
    host: "localhost",
    port: 7007,
  },
};

export default config;
