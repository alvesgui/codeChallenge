import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#000",
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
    color: "#fff",
    maxWidth: 180,
    marginVertical: 40,
    lineHeight: 32,
  },
});

export default styles;
