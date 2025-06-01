import { useState } from "react";
import { Button, Text, View } from "react-native";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increase = () => setCount(count + 1);
  return (
    <View>
      <Text style={{ fontSize: 25, color: "blue" }}>{count}</Text>
      <Button title="Increase" onPress={increase} />
    </View>
  );
};

export default Counter;
