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

export default function App() {
  return (
    <View style={styles.container}>
      <FlatlistEx />
    </View>
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
