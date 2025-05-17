import { ScrollView, StyleSheet, View } from "react-native";

import MyDrawer from "./components/MyDrawer";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView horizontal pagingEnabled>
          <View>Page 1</View>
          <View>Page 2</View>
          <View>Page 3</View>
          <View>Page 4</View>
          <View>Page 5</View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 500,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center"
  }
});
