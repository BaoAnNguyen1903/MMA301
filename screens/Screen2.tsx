import { Button, Text, View } from "react-native";
import { RootStackParamList } from "../types/NavigationType";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type Screnn2Props = {
  route: RouteProp<RootStackParamList, "Screen2">;
  navigation: NativeStackNavigationProp<RootStackParamList, "Screen2">;
};

const Screen2: React.FC<Screnn2Props> = ({ route, navigation }) => {
  const name = route.params.name;
  return (
    <View>
      <Text>Welcome {name}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Screen2;
