import { SectionList, Text, View } from "react-native";

const Data = [
  {
    title: "Trai Cay",
    data: ["Tao", "Banana", "Cam"]
  },
  {
    title: "Rau",
    data: ["Ca Rot", "Khoai Tay", "Ca Chua"]
  },
  {
    title: "Proteins",
    data: ["Egg", "Chicken", "Fish"]
  }
];

const SectionListEx = () => {
  return (
    <View>
      <SectionList
        sections={Data}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View>
            <Text>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section }) => <Text>{section.title}</Text>}
      />
    </View>
  );
};

export default SectionListEx;
