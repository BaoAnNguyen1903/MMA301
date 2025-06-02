import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import DetailScreen from "./(task)/detail";

const RootLayout = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="intro" options={{ headerShown: false }} />
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false, title: "Home" }}
        />
        <Stack.Screen name="(task)/detail" options={{ title: "Task Detail" }} />
      </Stack>
    </SafeAreaView>
  );
};

export default RootLayout;
