import { Text, View, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  section: {
    marginBottom: 20
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#555",
    marginBottom: 5
  },
  value: {
    fontSize: 22,
    fontWeight: "500",
    color: "#222"
  }
});

const DetailScreen = () => {
  const { id, title, description } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.label}>ID</Text>
        <Text style={styles.value}>{id}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Title</Text>
        <Text style={styles.value}>{title}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Description</Text>
        <Text style={styles.value}>{description}</Text>
      </View>
    </View>
  );
};

export default DetailScreen;
