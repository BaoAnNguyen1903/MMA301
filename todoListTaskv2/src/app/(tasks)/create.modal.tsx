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
import { useState } from "react";

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

interface IProps {
  modalVisible: boolean;
  setModalVisible: (v: boolean) => void;
  addNew: any;
}
const CreateModal = (props: IProps) => {
  const { modalVisible, setModalVisible, addNew } = props;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const handleSubmit = () => {
    if (!title) {
      Alert.alert("Thông tin không hợp lệ", "Nội dung không được để trống");
      return;
    }

    if (!description) {
      Alert.alert("Thông tin không hợp lệ", "Rating không được để trống");
      return;
    }

    addNew({
      id: randomInteger(2, 2000000),
      title,
      description
    });

    setModalVisible(false);
    setDescription("");
    setTitle("");
  };
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <SafeAreaView style={styles.container}>
        <View style={{ paddingHorizontal: 15 }}>
          {/* header */}
          <View style={styles.header}>
            <Text style={{ fontSize: 25 }}>CREATE A NEW TASK</Text>
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
                onChangeText={(v) => setTitle(v)}
              />
            </View>
            <View>
              <Text style={styles.text}>Description</Text>
              <TextInput
                style={styles.input}
                value={description}
                onChangeText={(v) => setDescription(v)}
              />
            </View>
          </View>

          {/* footer */}
          <View style={{ marginTop: 20 }}>
            <Button title="Add" onPress={handleSubmit} />
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default CreateModal;
