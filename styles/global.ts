import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  pictures: {
    width: 100,
    height: 100,
  },
  text: {
    flex: 1, // Ocupa el espacio restante en la fila
    textAlign: "center",
    fontSize: 40,
  },
  refreshIcon: {
    width: 60,
    height: 60,
    textAlign: "left",
  },
});
