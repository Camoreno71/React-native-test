import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingLeft: 20,
    width: "100%",
  },
  pictures: {
    width: 100,
    height: 100,
  },
  text: {
    flex: 1,
    textAlign: "center",
    fontSize: 20,
  },
  refreshButton: {
    borderRadius: 8,
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'center', 
    width: '60%', 
    alignContent: 'center', 
    marginBottom: 10,
    maxHeight: 30,
  }
});
