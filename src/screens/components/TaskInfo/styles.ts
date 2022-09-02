import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24
  },
  containerBlack: {
    position: "absolute",
    backgroundColor: "#000",
    height: 195,
    width: "100%"
  },
  containerBlackLight: {
    flex: 1,
    backgroundColor: "#181818"
  },
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
  },
  viewInfo: {
    paddingTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },
  viewInfoDetail: {
    flexDirection: "row",
    alignItems: "center"
  },
  textCreated: {
    color: "#399DD6",
    paddingRight: 8,
    fontSize: 15,
    fontWeight: "bold"
  },
  textCompleted: {
    color: "#7575F4",
    paddingRight: 8,
    fontSize: 15,
    fontWeight: "bold"
  },
  badge: {
    backgroundColor: "#2D2D2D"
  },
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
  textTaskChecked: {
    color: "#757575",
    textDecorationLine: "line-through",
    width: 235
  },
  textTaskUnchecked: {
    color: "#fff",
    width: 235
  },
  touchableUnchecked: {
    borderWidth: 2,
    borderColor: "#0A6392",
    width: 24,
    height: 24,
    borderRadius: 100,
    alignContent: "center",
    justifyContent: "center"
  },
  touchableChecked: {
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