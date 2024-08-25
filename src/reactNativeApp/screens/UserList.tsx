import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../styles/global";
import useUserList from "./hooks/useUserList";
import { ActivityIndicator } from "react-native";
import { RootStackParamList } from "../navigation/MainStack";
import { NativeStackScreenProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import { Icon } from "react-native-elements";
import Card from "../shared/components/Card";

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
      <TouchableOpacity onPress={() => refetch()} style={{ backgroundColor: isLoading ? "#878889" : "#6EB9F8", ...globalStyles.refreshButton }} >
        <Text>{isLoading ? "Cargando" : "Cargar más"}</Text>
        <Icon
          name="refresh"
        />
      </TouchableOpacity>
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
                <Text style={globalStyles.text}>{`${item.name.title || ""} ${item.name.first || ""} ${item.name.last || ""}`}</Text>
              </Card>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default UserList;
