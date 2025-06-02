import {
  Alert,
  Button,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useEffect, useState } from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    padding: 10,
    backgroundColor: "#fff"
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingVertical: 10,
    marginBottom: 20
  },

  groupInput: {
    marginBottom: 15
  },

  text: {
    fontSize: 20,
    fontWeight: "400"
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5
  }
});

interface ITask {
  id: number;
  title: string;
  description: string;
  completed?: boolean;
}

interface IProps {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  editingTask: ITask | null;
  update: (task: ITask) => void;
}

const UpdateModal = ({
  modalVisible,
  setModalVisible,
  editingTask,
  update
}: IProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [editingTask]);

  const handleSubmit = () => {
    if (!title.trim()) {
      Alert.alert("Thông tin không hợp lệ", "Tiêu đề không được để trống");
      return;
    }

    if (!description.trim()) {
      Alert.alert("Thông tin không hợp lệ", "Mô tả không được để trống");
      return;
    }

    if (editingTask) {
      update({
        ...editingTask,
        title: title.trim(),
        description: description.trim()
      });
    }

    setModalVisible(false);
    setTitle("");
    setDescription("");
  };

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <SafeAreaView style={styles.container}>
        <View style={{ paddingHorizontal: 15 }}>
          {/* header */}
          <View style={styles.header}>
            <Text style={{ fontSize: 25 }}>UPDATE TASK</Text>
            <AntDesign
              onPress={() => {
                setModalVisible(false);
                setTitle("");
                setDescription("");
              }}
              name="close"
              size={24}
              color="black"
            />
          </View>

          {/* body */}
          <View>
            <View style={styles.groupInput}>
              <Text style={styles.text}>Title</Text>
              <TextInput
                value={title}
                style={styles.input}
                onChangeText={setTitle}
                placeholder="Nhập tiêu đề"
              />
            </View>
            <View>
              <Text style={styles.text}>Description</Text>
              <TextInput
                style={styles.input}
                value={description}
                onChangeText={setDescription}
                placeholder="Nhập mô tả"
              />
            </View>
          </View>

          {/* footer */}
          <View style={{ marginTop: 20 }}>
            <Button title="Update" onPress={handleSubmit} />
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default UpdateModal;
