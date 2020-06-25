import React from "react";
import { View } from "react-native";
import VideoPlayer from "../../components/VideoPlayer";

import styles from "./styles";

export default function VideoTab() {
  return (
    <View style={styles.container}>
      <VideoPlayer />
    </View>
  );
}
