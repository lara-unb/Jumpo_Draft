import React, { useState } from "react";
import { Video } from "expo-av";
import { View } from "react-native";
import { MaterialIcons, Octicons } from "@expo/vector-icons";

import styles from "./styles";

export default function VideoPlayer() {
  // Botões de play, paus e mute
  const [shouldPlay, setShoulPlay] = useState(true);
  const [mute, setMute] = useState(false);

  return (
    <>
      <Video
        source={{
          uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay={shouldPlay}
        isLooping={false}
        // useNativeControls
        style={styles.video}
      />
      <View style={styles.controlBar}>
        <MaterialIcons
          name={mute ? "volume-mute" : "volume-up"}
          size={45}
          color="white"
          onPress={() => {
            setMute(!mute);
          }}
        />
        <MaterialIcons
          name={shouldPlay ? "pause" : "play-arrow"}
          size={45}
          color="white"
          onPress={() => {
            setShoulPlay(!shouldPlay);
          }}
        />
      </View>
    </>
  );
}
