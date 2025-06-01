import { Image, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  review: {
    fontSize: 30,
    // fontFamily: OPENSANS_REGULAR
  },
  reviewText: {
    fontSize: 25,
    // fontFamily: OPENSANS_REGULAR,
    padding: 15
  }
});
const DetailScreen = () => {
  return (
    <View>
      <Text style={styles.reviewText}>Id: {route.params?.id}</Text>
      <Text style={styles.reviewText}>Tiêu đề: {route.params?.title}</Text>
      <Text style={styles.reviewText}>Desciption: {route.params?.star}</Text>
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 10,
          gap: 10
        }}
      >
        <Image style={{ height: 60, width: 50 }} source={startIcon} />
        <Image
          style={{ height: 60, width: 50 }}
          source={require("../../assets/images/star.png")}
        />
        <Image
          style={{ height: 60, width: 50 }}
          source={require("../../assets/images/star.png")}
        />
        <Image
          style={{ height: 60, width: 50 }}
          source={require("../../assets/images/star.png")}
        />
        <Image
          style={{ height: 60, width: 50 }}
          source={require("../../assets/images/star.png")}
        />
      </View>
    </View>
  );
};

export default DetailScreen;
