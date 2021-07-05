import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 50,
    backgroundColor: "#000",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
