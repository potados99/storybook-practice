import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ReactNativeGrabRoot } from "react-native-grab";

export default function RootLayout() {
  return (
    <ReactNativeGrabRoot>
      <Stack screenOptions={{ headerShown: false }} />
      <StatusBar style="dark" />
    </ReactNativeGrabRoot>
  );
}
