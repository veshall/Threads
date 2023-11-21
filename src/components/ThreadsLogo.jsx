import { View } from "react-native";
import React from "react";
import { Image } from "expo-image";

export default function ThreadsLogo() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <Image
        source={require("../../assets/threads-light.png")}
        style={{
          width: 40,
          height: 40,
        }}
        contentFit="cover"
      />
    </View>
  );
}
