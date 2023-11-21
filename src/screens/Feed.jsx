import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThreadsContext } from "../Store/ThreadsContext";
import ThreadsItem from "../components/ThreadsItem";

export default function Feed(navigation) {
  const { threads } = React.useContext(ThreadsContext);

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 20, marginHorizontal: 14 }}
      >
        {threads?.map((thread) => (
          <ThreadsItem {...thread} key={thread.id} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
