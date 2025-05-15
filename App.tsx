import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <Ionicons name="albums" size={32} color="red" />
      <Ionicons name="albums-outline" size={32} color="red" />
      <Ionicons name="albums-sharp" size={32} color="red" />
      <Ionicons name="accessibility" size={32} color="red" />

      <AntDesign name="star" size={32} color="yellow" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
