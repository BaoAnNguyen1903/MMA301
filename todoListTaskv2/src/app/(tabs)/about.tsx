import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white"
  },
  about: {
    color: "black",
    fontSize: 40,
    padding: 8
  }
});
const AboutScreen = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await AsyncStorage.removeItem("savedUser");
    router.replace("/login");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/about.png")}
        style={{ height: 300, width: 300 }}
      />
      <Text style={styles.about}>About Task App</Text>
      <Text
        style={[
          styles.about,
          { color: "#8685E7", fontWeight: "bold", fontSize: 28 }
        ]}
      >
        Made by An Nguyen
      </Text>

      <View style={{ padding: 24 }}>
        <TouchableOpacity onPress={handleLogout}>
          <Text style={{ color: "#8685E7", fontWeight: "bold", fontSize: 28 }}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AboutScreen;
