import AsyncStorage from "@react-native-async-storage/async-storage";
import { ReactNativeGrabRoot } from "react-native-grab";
import { view } from "./storybook.requires";

const StorybookUI = view.getStorybookUI({
  storage: {
    getItem: AsyncStorage.getItem,
    setItem: AsyncStorage.setItem,
  },
  enableWebsockets: true,
  host: "localhost",
  port: 7007,
});

export default function StorybookWithGrab() {
  return (
    <ReactNativeGrabRoot>
      <StorybookUI />
    </ReactNativeGrabRoot>
  );
}
