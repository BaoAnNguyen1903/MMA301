import React, { useRef } from "react";
import {
  DrawerLayoutAndroid,
  StyleSheet,
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

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginTop: 24
  },
  headerText: {
    fontSize: 20,
    marginLeft: 16
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  mainText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  drawerContainer: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    marginTop: 24
  }
});

export default MyDrawer;
