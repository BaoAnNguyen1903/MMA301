import { Alert, FlatList, Text, TouchableOpacity, View } from "react-native";

const Data = [
  { id: "1", title: "item1" },
  { id: "2", title: "item2" },
  { id: "3", title: "item3" },
  { id: "4", title: "item4" },
  { id: "5", title: "item5" },
  { id: "6", title: "item6" },
  { id: "7", title: "item7" }
];

interface ItemProps {
  item: { id: string; title: string };
  onPress: () => void;
}

const Item = (props: ItemProps) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        margin: 10,
        backgroundColor: "lightblue"
      }}
    >
      <Text>
        {props.item.id} - {props.item.title}
      </Text>
    </TouchableOpacity>
  );
};

const onPressHanlder = (item) => {
  Alert.alert("Item pressed", `You pressed ${item.id} => ${item.title}`);
};

const FlatlistEx = () => {
  return (
    <FlatList
      data={Data}
      renderItem={({ item }) => (
        <Item item={item} onPress={() => onPressHanlder(item)} />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default FlatlistEx;
