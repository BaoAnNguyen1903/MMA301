import {
  Alert,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import MyClassComponent from "./components/MyClassComponent";
import MyFunctionComponent from "./components/MyFunctionComponent";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView styles={{ flex: 1 }}>
        <MyClassComponent />
        <MyFunctionComponent />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  page: {
    width: 250,
    height: 300,
    justifyContent: "center",
    backgroundColor: "lightblue",
    borderWidth: 1,
    marginBottom: 40
  }
});
