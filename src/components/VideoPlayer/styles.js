import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  video: {
    width: width - 18,
    height: height / 3,
  },
});
