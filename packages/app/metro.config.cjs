const { getDefaultConfig } = require("expo/metro-config");
const { withStorybook } = require("@storybook/react-native/metro/withStorybook");
const { withReactNativeGrab } = require("react-native-grab/metro");

const projectRoot = __dirname;
let config = getDefaultConfig(projectRoot);

config = withReactNativeGrab(config);

module.exports = withStorybook(config, {
  enabled: process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true",
  configPath: ".rnstorybook",
  websockets: {
    port: 7007,
    host: "localhost",
  },
});
