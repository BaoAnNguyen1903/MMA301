import { FlatList, Text, View } from "react-native";

const Data = [
  { id: "1", title: "item1" },
  { id: "2", title: "item2" },
  { id: "3", title: "item3" },
  { id: "4", title: "item4" },
  { id: "5", title: "item5" },
  { id: "6", title: "item6" },
  { id: "7", title: "item7" }
];

const FlatlistEx = () => {
  return (
    <FlatList
      data={Data}
      renderItem={({ item }) => (
        <View
          style={{
            padding: 10,
            borderBottomWidth: 1,
            borderBottomColor: "red",
            margin: 10,
            backgroundColor: "#ccc"
          }}
        >
          <Text>
            {item.id} - {item.title}
          </Text>
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default FlatlistEx;
