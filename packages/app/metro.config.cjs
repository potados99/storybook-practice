const { getDefaultConfig } = require("expo/metro-config");
const { withStorybook } = require("@storybook/react-native/metro/withStorybook");

const projectRoot = __dirname;
const config = getDefaultConfig(projectRoot);

module.exports = withStorybook(config, {
  enabled: process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true",
  configPath: ".rnstorybook",
});
