import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import Card from "../shared/components/Card";
import { globalStyles } from "../styles/global";
import useUserList from "./hooks/useUserList";
import { ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";

const UserDetail = () => {
  const { data, isLoading } = useUserList();
  const response = data ?? { results: [], count: 0 };
  const { results } = response;
  const navigation = useNavigation();

  if (isLoading) {
    return <ActivityIndicator />;
  }
  return (
    <View style={globalStyles.container}>
      {/* <Text>Te amo Maria!</Text> */}
      <FlatList
        data={results}
        keyExtractor={(item, index) => item.id.value || index}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
            //   onPress={() => navigation.navigate("user-detail")}
            >
              <Card>
                <Image
                  style={globalStyles.pictures}
                  source={{
                    uri: item.picture.medium,
                  }}
                />
                <Text style={globalStyles.text}>{item.name.first}</Text>
              </Card>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default UserDetail;
