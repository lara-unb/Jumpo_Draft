import React from "react";
import { View } from "react-native";
import VideoPlayer from "../../components/VideoPlayer";

import styles from "./styles";

export default function VideoTab() {
  return (
    <View style={styles.container}>
      <VideoPlayer uri="http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4" />
    </View>
  );
}
