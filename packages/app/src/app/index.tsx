import { SafeAreaView } from "react-native-safe-area-context";
import { Box } from "../components/box";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 16 }}>
      <Box title="Hello Unistyles" description="Expo 앱에서 Unistyles가 동작합니다." />
    </SafeAreaView>
  );
}
