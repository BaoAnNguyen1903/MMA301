import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

interface ITask {
  id: number;
  title: string;
  description: string;
}

const styles = StyleSheet.create({
  reviewItem: {
    padding: 15,
    backgroundColor: "#ccc",
    margin: 15
  }
});

const HomeScreen = (props: any) => {
  const [tasks, setTasks] = useState<ITask[]>([
    { id: 1, title: "homework", description: "làm bài tập về nhà." },
    { id: 2, title: "hoidanit", description: "" }
  ]);

  const [modalVisible, setModalVisible] = useState(false);

  const addNew = (item: ITask) => {
    setTasks([...tasks, item]);
  };

  return (
    <View>
      <Text
        style={{
          fontSize: 40,
          padding: 10,
          textAlign: "center",
          fontWeight: "bold",
          color: "#8685E7"
        }}
      >
        TO DO LIST TASKS
      </Text>
      <View style={{ alignItems: "center" }}>
        <AntDesign
          onPress={() => setModalVisible(true)}
          name="plussquareo"
          size={40}
          color="#8685E7"
        />
      </View>
      <View>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id + ""}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => router.navigate("/detail")}>
                <View style={styles.reviewItem}>
                  <Text>{item.title}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      {/* <CreateModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        addNew={addNew}
      /> */}
    </View>
  );
};

export default HomeScreen;
