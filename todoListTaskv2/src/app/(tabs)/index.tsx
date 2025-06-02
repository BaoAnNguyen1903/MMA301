import { AntDesign, Octicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import CreateModal from "../(tasks)/create.modal";
import UpdateModal from "../(tasks)/update.modal";

interface ITask {
  id: number;
  title: string;
  description: string;
  completed?: boolean;
}

const styles = StyleSheet.create({
  taskItem: {
    padding: 15,
    marginHorizontal: 16,
    marginVertical: 8,
    backgroundColor: "#f2f2f2",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  taskTextContainer: {
    flex: 1,
    marginRight: 10
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333"
  },
  taskTitleCompleted: {
    textDecorationLine: "line-through",
    color: "#999"
  },
  taskDescription: {
    fontSize: 14,
    color: "#777",
    marginTop: 4
  },
  iconRow: {
    flexDirection: "row",
    gap: 10
  }
});

const HomeScreen = () => {
  const [tasks, setTasks] = useState<ITask[]>([
    { id: 1, title: "minecraft", description: "chơi mai ráp" },
    {
      id: 2,
      title: "ansinhvien",
      description: "đăng ký kênh youtube ân sinh viên"
    }
  ]);

  const [createModalVisible, setCreateModalVisible] = useState(false);
  const [updateModalVisible, setUpdateModalVisible] = useState(false);
  const [editingTask, setEditingTask] = useState<ITask | null>(null);

  const addNew = (item: ITask) => {
    setTasks([...tasks, item]);
  };

  const toggleComplete = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const updateTask = (updatedTask: ITask) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
    setEditingTask(null);
  };

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <View style={{ backgroundColor: "white", flex: 1, paddingVertical: 20 }}>
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
      <View style={{ alignItems: "center", marginBottom: 10 }}>
        <AntDesign
          onPress={() => setCreateModalVisible(true)}
          name="plussquareo"
          size={40}
          color="#8685E7"
        />
      </View>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <TouchableOpacity
              style={styles.taskTextContainer}
              disabled={item.completed}
              onPress={() =>
                router.push({
                  pathname: "/(tasks)/detail",
                  params: {
                    id: item.id.toString(),
                    title: item.title,
                    description: item.description
                  }
                })
              }
            >
              <Text
                style={[
                  styles.taskTitle,
                  item.completed && styles.taskTitleCompleted
                ]}
              >
                {item.title}
              </Text>
            </TouchableOpacity>

            <View style={styles.iconRow}>
              <TouchableOpacity onPress={() => toggleComplete(item.id)}>
                <AntDesign name="check" size={25} color="#4CAF50" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setEditingTask(item);
                  setUpdateModalVisible(true);
                }}
              >
                <Octicons name="pencil" size={20} color="orange" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteTask(item.id)}>
                <AntDesign name="close" size={24} color="red" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <CreateModal
        modalVisible={createModalVisible}
        setModalVisible={setCreateModalVisible}
        addNew={addNew}
      />
      <UpdateModal
        modalVisible={updateModalVisible}
        setModalVisible={setUpdateModalVisible}
        editingTask={editingTask}
        update={updateTask} // hàm update task bạn đã định nghĩa
      />
      ;
    </View>
  );
};

export default HomeScreen;
