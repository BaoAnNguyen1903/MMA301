import { Text, View, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

const styles = StyleSheet.create({
  taskText: {
    fontSize: 25,
    padding: 15
  }
});

const DetailScreen = () => {
  const { id, title, description } = useLocalSearchParams();

  return (
    <View>
      <Text style={styles.taskText}>ID: {id}</Text>
      <Text style={styles.taskText}>Title: {title}</Text>
      <Text style={styles.taskText}>Description: {description}</Text>
    </View>
  );
};

export default DetailScreen;
