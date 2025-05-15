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
import Greeting from "./components/Greeting";

export default function App() {
  return (
    <View>
      <Greeting name="An" address="02 tien son 11" />
      <Greeting name="An1" address="02 tien son 11" />
      <Greeting name="An1" address="02 tien son 11" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
