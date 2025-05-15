import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";

const onPressButton = () => {
  Alert.alert("dasdhasidah");
};

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/icon.png")}
        style={{ width: 200, height: 200 }}
      />

      <Image
        source={{
          uri: "https://icdn.dantri.com.vn/2017/khieu-dam-tre-em-1-1489518122023.jpg"
        }}
        style={{ width: 200, height: 200 }}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
    padding: 16
  }
});
