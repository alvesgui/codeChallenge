import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginTop: 20,
  },
  input: {
    height: 58,
    flex: 1,
    backgroundColor: "#fff",
    paddingLeft: 40,
    marginHorizontal: 20,
    borderRadius: 8,
    fontSize: 16,
    borderColor: "#f80000",
    borderWidth: 1,
  },
  icon: {
    position: "absolute",
    left: 30,
    top: 12,
  },
  iconSecret: {
    position: "absolute",
    right: 30,
    top: 12,
  },
});

export default styles;
