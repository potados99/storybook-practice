import "./src/styles/unistyles";

const STORYBOOK_ENABLED = process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true";

if (STORYBOOK_ENABLED) {
  const { registerRootComponent } = require("expo");
  const StorybookUI = require("./.rnstorybook").default;
  registerRootComponent(StorybookUI);
} else {
  require("expo-router/entry");
}
