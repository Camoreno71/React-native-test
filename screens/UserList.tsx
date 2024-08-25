import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import Card from "../shared/components/Card";
import { globalStyles } from "../styles/global";
import useUserList from "./hooks/useUserList";
import { ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/MainStack";
import { NativeStackScreenProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import { Icon } from "react-native-elements";

type UserListProps = NativeStackScreenProps<RootStackParamList, "userList">;

const UserList = ({ navigation }: UserListProps) => {
  const { data, isLoading, refetch } = useUserList();
  const response = data ?? { results: [], count: 0 };
  const { results } = response;

  if (isLoading) {
    return <ActivityIndicator />;
  }
  return (
    <View style={globalStyles.container}>
      <Icon
        style={globalStyles.refreshIcon}
        name="refresh"
        size={65}
        onPress={() => refetch()}
      />
      <FlatList
        data={results}
        keyExtractor={(item, index) => item.id.value || index}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("userDetail", {
                  image: item.picture.large,
                  name: item.name,
                  email: item.email,
                  phoneNumber: item.cell,
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
