import React from "react";
import { TextInput, View, Text, ScrollView } from "react-native";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThreadsContext } from "../Store/ThreadsContext";

export default function Search() {
  const { userSugg } = React.useContext(ThreadsContext);
  return (
    <SafeAreaView style={{ marginHorizontal: 14, gap: 8, top: 6 }}>
      <Text style={{ fontSize: 30, fontWeight: "800" }}>Search</Text>
      <View>
        <TextInput
          placeholder="Search"
          p
          style={{
            backgroundColor: "#e5e5e5",
            borderRadius: 8,
            height: 36,
            paddingHorizontal: 10,
          }}
        />
      </View>

      <ScrollView
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {userSugg.map((user) => (
          <SearchCard {...user} key={user.id} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

function SearchCard({ name, userName, photo, verified, followers }) {
  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 12,
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
        <Image
          source={photo}
          placeholder={blurhash}
          contentFit="cover"
          transition={200}
          style={{
            width: 36,
            height: 36,
            borderRadius: 20,
            top: 5,
            alignSelf: "flex-start",
          }}
        />

        <View style={{ gap: 1 }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: "600", fontSize: 14 }}>{userName}</Text>
            {verified && (
              <MaterialIcons name="verified" size={14} color="#60a5fa" />
            )}
          </View>
          <Text style={{ color: "gray" }}>{name}</Text>
          <Text>{followers} followers</Text>
        </View>
      </View>

      <View
        style={{
          borderWidth: 1,
          borderRadius: 8,
          borderColor: "lightgray",
          alignSelf: "flex-start",
          top: 8,
        }}
      >
        <Text style={{ fontWeight: "700", padding: 4, paddingHorizontal: 20 }}>
          Follow
        </Text>
      </View>
    </View>
  );
}
