import { StatusBar } from "expo-status-bar";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";

const onPressButton = () => {
  Alert.alert("dasdhasidah");
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 12 }}>UserName:</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 12
        }}
        placeholder="Enter username"
      />
      <Text style={{ marginBottom: 12 }}>Password:</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 12
        }}
        placeholder="Enter username"
        secureTextEntry={true}
      />
      <Button title="Submit" onPress={onPressButton} />
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
