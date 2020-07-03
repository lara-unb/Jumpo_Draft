import React, { useState, useEffect } from "react";
import { Video } from "expo-av";
import { View } from "react-native";
import Slider from "@react-native-community/slider";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";

import styles from "./styles";

export default function VideoPlayer({ uri }) {
  const [shouldPlay, setShoulPlay] = useState(false);
  const [mute, setMute] = useState(false);
  const [playbackStatus, setPlaybackStatus] = useState();
  const [videoRef, setVideoRef] = useState();
  const [sliderValue, setSliderValue] = useState(0);
  const [sliderMaxValue, setSliderMaxValue] = useState(0);

  const fowardFrame = () => {
    if (videoRef && playbackStatus) {
      if (
        playbackStatus.durationMillis - playbackStatus.positionMillis >
        2000
      ) {
        videoRef.setPositionAsync(playbackStatus.positionMillis + 2000);
      } else {
        videoRef.setPositionAsync(playbackStatus.durationMillis);
      }
    }
  };

  const banckwardFrame = () => {
    if (videoRef && playbackStatus) {
      if (playbackStatus.positionMillis > 2000) {
        videoRef.setPositionAsync(playbackStatus.positionMillis - 2000);
      } else {
        videoRef.setPositionAsync(0);
      }
    }
  };

  const handleSliderChange = (value) => {
    setShoulPlay(false);
    setSliderValue(value);

    if (videoRef && playbackStatus) {
      videoRef.setPositionAsync(sliderValue);
    }
  };

  useEffect(() => {
    if (playbackStatus) setSliderMaxValue(playbackStatus.durationMillis);
  }, [videoRef]);

  const myOnPlaybackStatusUpdate = async (playbackStatusEvent) => {
    await setPlaybackStatus(playbackStatusEvent);
    if (videoRef && playbackStatus) {
      await setSliderValue(playbackStatus.positionMillis);
    }
  };

  return (
    <>
      <Video
        style={styles.video}
        isMuted={mute}
        rate={1.0}
        volume={1.0}
        onPlaybackStatusUpdate={myOnPlaybackStatusUpdate}
        ref={(ref) => {
          setVideoRef(ref);
        }}
        resizeMode="cover"
        source={{ uri: uri }}
        shouldPlay={shouldPlay}
      />

      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={30000}
        value={sliderValue}
        onValueChange={handleSliderChange}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
      />

      <View style={styles.controlBar}>
        <AntDesign
          name="banckward"
          size={28}
          color="white"
          onPress={banckwardFrame}
          style={{ paddingRight: 15 }}
        />
        <MaterialIcons
          name={shouldPlay ? "pause" : "play-arrow"}
          size={45}
          color="white"
          onPress={() => {
            setShoulPlay(!shouldPlay);
          }}
        />
        <AntDesign
          name="forward"
          size={28}
          color="white"
          onPress={fowardFrame}
          style={{ paddingLeft: 15 }}
        />
      </View>
    </>
  );
}
