import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import Card from "../shared/components/Card";
import { globalStyles } from "../styles/global";
import useUserList from "./hooks/useUserList";

const UserList = () => {
  const { data } = useUserList();
  const response = data ?? { results: [], count: 0 };
  const { results } = response;

  return (
    <View style={globalStyles.container}>
      {/* <Text>Te amo Maria!</Text> */}
      <FlatList
        data={results}
        keyExtractor={(item) => item.id.value}
        renderItem={({ item }) => {
          return (
            <Card>
              <Image
                style={globalStyles.pictures}
                source={{
                  uri: item.picture.medium,
                }}
              />
              <Text style={globalStyles.text}>{item.name.first}</Text>
            </Card>
          );
        }}
        // contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      />
    </View>
  );
};

export default UserList;
