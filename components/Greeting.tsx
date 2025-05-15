import { Text, View } from "react-native";

interface GreetingProps {
  name: string;
  address?: string;
}

const Greeting = (props: GreetingProps) => {
  return (
    <View>
      <Text>Name: {props.name}</Text>
      {props.address && <Text>Address: {props.address}</Text>}
    </View>
  );
};

export default Greeting;
