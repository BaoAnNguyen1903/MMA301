import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white"
  },
  text: {
    color: "black",
    fontSize: 40,
    padding: 8
  }
});

export default function WelcomePage() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/intro");
    }, 2000);

    return () => clearTimeout(timer); // cleanup nếu component bị unmount
  }, []);

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="checkbox-multiple-marked-outline"
        size={150}
        color="#8685E7"
      />
      <Text style={styles.text}>Welcome to</Text>
      <Text style={[styles.text, { color: "#8685E7", fontWeight: "bold" }]}>
        TodoList Tasks
      </Text>
    </View>
  );
}
