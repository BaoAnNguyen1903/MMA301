import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "./types/NavigationType";
import { NavigationContainer } from "@react-navigation/native";
import Screen2 from "./screens/Screen2";
import Screen1 from "./screens/Screen1";

const Root = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Root.Navigator initialRouteName="Screen1">
        <Root.Screen name="Screen1" component={Screen1} />
        <Root.Screen name="Screen2" component={Screen2} />
      </Root.Navigator>
    </NavigationContainer>
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
