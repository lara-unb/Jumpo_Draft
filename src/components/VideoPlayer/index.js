import React from "react";
import { Video } from "expo-av";

import styles from "./styles";

export default function VideoPlayer() {
  return (
    <Video
      source={{
        uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
      }}
      rate={1.0}
      volume={1.0}
      isMuted={false}
      resizeMode="cover"
      shouldPlay={false}
      isLooping={false}
      useNativeControls
      style={styles.video}
    />
  );
}
