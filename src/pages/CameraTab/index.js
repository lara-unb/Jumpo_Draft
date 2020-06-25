import React from "react";
import { View } from "react-native";
import PhoneCamera from "../../components/PhoneCamera";

import styles from "./styles";

export default function CameraTab() {
  return (
    <View style={styles.container}>
      <PhoneCamera />
    </View>
  );
}
