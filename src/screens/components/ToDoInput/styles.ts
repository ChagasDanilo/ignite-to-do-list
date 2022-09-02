import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  taskAddView: {
    flexDirection: "row",
    height: 54,
    alignItems: "center",
    justifyContent: "center"
  },
  taskAddInput: {
    flex: 1,
    height: 54,
    backgroundColor: "#222",
    marginRight: 6,
    color: "#fff",
    fontSize: 16,
    padding: 16,
    borderRadius: 6
  },
  button: {
    backgroundColor: "#0A6392",
    width: 52,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6
  }
});