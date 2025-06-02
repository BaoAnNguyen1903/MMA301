import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet
} from "react-native";

type Task = {
  id: string;
  title: string;
  completed: boolean;
};

export default function App() {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = () => {
    if (!task.trim()) return;
    const newTask: Task = {
      id: Date.now().toString(),
      title: task,
      completed: false
    };
    setTasks([newTask, ...tasks]);
    setTask("");
  };

  const toggleComplete = (id: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const renderItem = ({ item }: { item: Task }) => (
    <View style={styles.taskItem}>
      <Text style={[styles.taskText, item.completed && styles.completedText]}>
        {item.title}
      </Text>
      <TouchableOpacity
        onPress={() => toggleComplete(item.id)}
        style={styles.completeButton}
      >
        <Text style={styles.buttonText}>✓</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => deleteTask(item.id)}
        style={styles.deleteButton}
      >
        <Text style={styles.buttonText}>✕</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter task..."
          value={task}
          onChangeText={setTask}
        />
        <TouchableOpacity onPress={handleAddTask} style={styles.addButton}>
          <Text style={styles.buttonText}>＋</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text style={styles.emptyText}>No tasks yet!</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center"
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 20
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    fontSize: 16
  },
  addButton: {
    marginLeft: 10,
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 8,
    justifyContent: "center"
  },
  taskItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#eee"
  },
  taskText: {
    flex: 1,
    fontSize: 16
  },
  completedText: {
    textDecorationLine: "line-through",
    color: "gray"
  },
  completeButton: {
    backgroundColor: "green",
    padding: 8,
    borderRadius: 5,
    marginRight: 5
  },
  deleteButton: {
    backgroundColor: "red",
    padding: 8,
    borderRadius: 5
  },
  buttonText: {
    color: "#fff",
    fontSize: 16
  },
  emptyText: {
    textAlign: "center",
    color: "#aaa",
    marginTop: 30
  }
});
