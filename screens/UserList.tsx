import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import Card from "../shared/components/Card";
import { globalStyles } from "../styles/global";
import useUserList from "./hooks/useUserList";
import { ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/MainStack";
import { NativeStackScreenProps } from "@react-navigation/native-stack/lib/typescript/src/types";

type UserListProps = NativeStackScreenProps<RootStackParamList, "userList">;

const UserList = ({ navigation }: UserListProps) => {
  const { data, isLoading } = useUserList();
  const response = data ?? { results: [], count: 0 };
  const { results } = response;

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
              onPress={() =>
                navigation.navigate("userDetail", {
                  image: item.picture.medium,
                  name: item.name,
                  email: item.email,
                  phoneNumber: item.phone,
                  address: item.location,
                })
              }
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

export default UserList;
