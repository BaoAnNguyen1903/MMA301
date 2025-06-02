import { Image, StyleSheet, Text, View } from "react-native";

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
    </View>
  );
};

export default AboutScreen;
