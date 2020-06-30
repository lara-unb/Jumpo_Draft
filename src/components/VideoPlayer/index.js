import React, { useState, forwardRef } from "react";
import { Video } from "expo-av";
import { View } from "react-native";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";

import styles from "./styles";

export default function VideoPlayer({ uri }) {
  const [shouldPlay, setShoulPlay] = useState(false);
  const [mute, setMute] = useState(false);
  const [playbackStatus, setPlaybackStatus] = useState();
  const [videoRef, setVideoRef] = useState();

  const playVideo = () => {
    if (videoRef && !shouldPlay) {
      setShoulPlay(true);
      videoRef.playAsync();
    }
  };

  const pauseVideo = () => {
    if (videoRef && shouldPlay) {
      setShoulPlay(false);
      videoRef.pauseAsync();
    }
  };

  const setToFullScreen = () => {
    if (videoRef) {
      videoRef.presentFullscreenPlayer();
    }
  };

  const myOnPlaybackStatusUpdate = async (playbackStatus) => {
    await setPlaybackStatus(playbackStatus);
  };

  const fowardFrame = () => {
    if (videoRef && playbackStatus) {
      if (
        playbackStatus.durationMillis - playbackStatus.positionMillis >
        2000
      ) {
        videoRef.playFromPositionAsync(playbackStatus.positionMillis + 2000);
      } else {
        videoRef.playFromPositionAsync(playbackStatus.durationMillis);
      }
    }
  };

  const banckwardFrame = () => {
    if (videoRef && playbackStatus) {
      if (playbackStatus.positionMillis > 2000) {
        videoRef.playFromPositionAsync(playbackStatus.positionMillis - 2000);
      } else {
        videoRef.playFromPositionAsync(0);
      }
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
        // source={{
        //   uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        // }}
        // rate={1.0}
        // volume={1.0}
        // isMuted={mute}
        // resizeMode="cover"
        // shouldPlay={shouldPlay}
        // isLooping={false}
        // useNativeControls
      />
      <View style={styles.controlBar}>
        <AntDesign
          name="banckward"
          size={28}
          color="white"
          onPress={banckwardFrame}
          style={{ paddingRight: 15 }}
        />
        {/* <MaterialIcons
          name={mute ? "volume-mute" : "volume-up"}
          size={45}
          color="white"
          onPress={() => {
            setMute(!mute);
          }}
        /> */}
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
