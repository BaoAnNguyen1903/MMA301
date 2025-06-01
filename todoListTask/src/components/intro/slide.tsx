import { Image, StyleSheet, Text, View } from "react-native";

const Slide = ({
  image,
  title,
  subtitle
}: {
  image: any;
  title: string;
  subtitle: string;
}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: 60,
    paddingHorizontal: 24,
    flex: 1
  },
  image: {
    width: 300,
    height: 300
  },
  title: {
    color: "#8685E7",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 20
  },
  subtitle: {
    color: "#aaa",
    fontSize: 16,
    textAlign: "center",
    marginTop: 10
  }
});

export default Slide;
