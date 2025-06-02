import { Text, View, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

const styles = StyleSheet.create({
  taskText: {
    fontSize: 25,
    padding: 15
    // fontFamily: OPENSANS_REGULAR,
  }
});

const DetailScreen = () => {
  const { id, title, description } = useLocalSearchParams();

  return (
    <View>
      <Text style={styles.taskText}>Id: {id}</Text>
      <Text style={styles.taskText}>Tiêu đề: {title}</Text>
      <Text style={styles.taskText}>Description: {description}</Text>
    </View>
  );
};

export default DetailScreen;
