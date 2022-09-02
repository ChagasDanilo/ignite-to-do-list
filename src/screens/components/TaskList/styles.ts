import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  flatList: {
    marginTop: 20
  },
  viewEmpty: {
    borderTopColor: "#323232",
    borderTopWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 48
  },
  textEmptyTitle: {
    color: "#757575",
    fontWeight: "bold"
  },
  textEmptyDescription: {
    color: "#757575"
  },
  imageEmpty: {
    marginBottom: 16,
    width: 56
  },
  viewTask: {
    flexDirection: "row",
    backgroundColor: "#222222",
    height: 64,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
    borderRadius: 8,
    marginBottom: 8
  },
  textTaskDone: {
    color: "#757575",
    textDecorationLine: "line-through",
    width: 235
  },
  textTask: {
    color: "#fff",
    width: 235
  },
  touchable: {
    borderWidth: 2,
    borderColor: "#0A6392",
    width: 24,
    height: 24,
    borderRadius: 100,
    alignContent: "center",
    justifyContent: "center"
  },
  touchableDone: {
    borderWidth: 2,
    borderColor: "#0A6392",
    width: 24,
    height: 24,
    borderRadius: 100,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#5252C3"
  }
});