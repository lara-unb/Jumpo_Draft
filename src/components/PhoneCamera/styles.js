import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  camera: {
    flex: 1,
  },

  topBar: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
  },

  switchCamera: {
    flex: 0.1,
    alignSelf: "flex-end",
    alignItems: "center",
  },

  flip: {
    fontSize: 18,
    marginBottom: 10,
    color: "white",
  },
});
