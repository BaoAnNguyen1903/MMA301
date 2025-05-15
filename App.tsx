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

export default function App() {
  return (
    <ScrollView horizontal pagingEnabled>
      <View style={styles.page}>
        <Text>1</Text>
      </View>
      <View style={styles.page}>
        <Text>2</Text>
      </View>
      <View style={styles.page}>
        <Text>3</Text>
      </View>
    </ScrollView>
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
