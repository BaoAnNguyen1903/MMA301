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
import Counter from "./components/Counter";
import FlatlistEx from "./components/FlatlistEx";
import MyDrawer from "./components/MyDrawer";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <MyDrawer />
    </View>
  );
}
