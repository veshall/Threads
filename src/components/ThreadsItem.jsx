import { View, Text } from "react-native";
import React from "react";
import { Image } from "expo-image";
import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { timeAgo } from "../Utils/time-ago";
import { useColorScheme } from "react-native";
import { StyleSheet } from "react-native";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function ThreadsItem(thread) {
  return (
    <View style={styles.container}>
      <PostLeftSide {...thread} />
      <View style={{ gap: 6, flexShrink: 1 }}>
        <PostHeading
          name={thread.author.name}
          createdAt={thread.createdAt}
          verified={thread.author.verified}
        />

        <Text>{thread.content}</Text>

        {thread.image && (
          <Image
            source={thread?.image}
            placeholder={blurhash}
            style={{
              width: "100%",
              minHeight: 300,
              borderRadius: 10,
              marginBottom: 14,
            }}
            contentFit="cover"
            transition={200}
          />
        )}

        <BottomIcons />

        <PostFooter
          repliesCount={thread.repliesCount}
          likesCount={thread.likesCount}
        />
      </View>
    </View>
  );
}

function PostLeftSide(thread) {
  const currentTheme = useColorScheme();
  const borderColor = currentTheme === "Dark" ? "white" : "lightgray";

  return (
    <View style={{ justifyContent: "space-between" }}>
      <Image
        source={thread?.author?.photo}
        style={styles.image}
        placeholder={blurhash}
        contentFit="cover"
        transition={200}
      />
      <View
        style={{
          borderWidth: 1,
          alignSelf: "center",
          flexGrow: 1,
          borderColor,
        }}
      />
      <View
        style={{ width: 20, alignItems: "center", alignSelf: "center", gap: 3 }}
      >
        {[1, 2, 3].map((index) => {
          <Image
            key={index}
            source={thread?.replies[index - 1]?.author.photo}
            style={{ width: index * 7, height: index * 7, borderRadius: 15 }}
            placeholder={blurhash}
            contentFit="cover"
            transition={500}
          />;
        })}
      </View>
    </View>
  );
}

function PostHeading({ name, createdAt, verified }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexGrow: 1,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <Text style={{ fontWeight: "600", letterSpacing: -0.3, fontSize: 16 }}>
          {name}
        </Text>
        {verified && (
          <MaterialIcons name="verified" size={14} color="#60a5fa" />
        )}
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <Text style={{ color: "gray" }}>{timeAgo(createdAt)}</Text>
        <Feather name="more-horizontal" size={20} color="black" />
      </View>
    </View>
  );
}

function PostFooter({ repliesCount, likesCount }) {
  return (
    <Text style={{ color: "gray" }}>
      {repliesCount} replies • {likesCount} likes
    </Text>
  );
}

function BottomIcons() {
  const iconSize = 20;
  const currentTheme = useColorScheme();
  const iconColor = currentTheme === "Dark" ? "white" : "black";
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
      <AntDesign name="hearto" size={iconSize} color={iconColor} />
      <Ionicons name="chatbubble-outline" size={iconSize} color={iconColor} />
      <AntDesign name="retweet" size={iconSize} color={iconColor} />
      <Feather name="send" size={iconSize} color={iconColor} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 6,
    paddingBottom: 30,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
