import { StatusBar } from "expo-status-bar";
import { Alert, Button, StyleSheet, Text, View } from "react-native";

const onPressButton = () => {
  Alert.alert("dasdhasidah");
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Demo Button</Text>
      <Button title="Click Me" color="red" onPress={() => alert("me")} />
      <Button
        title="Click Me"
        color="red"
        disabled={false}
        onPress={onPressButton}
      />
      <Button title="Click Me" color="red" disabled={true} />
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
