import type { Preview } from "@storybook/react";
import { Agentation } from "agentation";
import "../src/styles/unistyles";

const preview: Preview = {
  decorators: [
    (Story) => (
      <>
        <Story />
        <Agentation
          endpoint="http://localhost:4747"
          onSessionCreated={(sessionId) => {
            console.log("Session started:", sessionId);
          }}
        />
      </>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
