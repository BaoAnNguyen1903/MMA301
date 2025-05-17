import React, { useRef } from "react";
import {
  DrawerLayoutAndroid,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const MyDrawer = () => {
  const drawer = useRef<DrawerLayoutAndroid>(null);

  const navigationView = () => {
    <View>
      <Text>Item 1</Text>
      <Text>Item 2</Text>
      <TouchableOpacity onPress={() => drawer.current?.closeDrawer()}>
        <Text>Close Drawee</Text>
      </TouchableOpacity>
    </View>;
  };

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition="left"
      renderNavigationView={navigationView}
    >
      <View>
        <TouchableOpacity onPress={() => drawer.current?.openDrawer()}>
          <Ionicons name="menu" size={32} color="black" />
        </TouchableOpacity>
        <Text>Header</Text>
      </View>
      <View>
        <Text>Content</Text>
      </View>
    </DrawerLayoutAndroid>
  );
};

export default MyDrawer;
