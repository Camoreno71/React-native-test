import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MainStack from "./navigation/MainStack";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={client}>
      <SafeAreaView style={{ flex: 1 }}>
        <MainStack />
      </SafeAreaView>
    </QueryClientProvider>
  );
}
