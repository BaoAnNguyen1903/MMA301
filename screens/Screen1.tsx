import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/NavigationType";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

type Screen1Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Screen1">;
};

const Screen1: React.FC<Screen1Props> = ({ navigation }) => {
  const [name, setName] = useState<string>("");
  const handleSummit = () => {
    if (name.trim()) {
      navigation.navigate("Screen2", { name });
    } else {
      alert("Please enter your name");
    }
  };
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Enter your name</Text>
      <TextInput
        style={styles.input}
        placeholder="Your name"
        onChangeText={setName}
        value={name}
      />
      <Button title="Next" onPress={handleSummit} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "lightblue"
  },
  title: {
    fontSize: 24,
    marginBottom: 20
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#fff"
  }
});
export default Screen1;
