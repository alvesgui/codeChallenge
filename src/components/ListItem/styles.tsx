import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
  },
  subContainer: {
    width: "80%",
    marginTop: 1,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e6e6f0",
    borderRadius: 8,
    marginBottom: 16,
    overflow: "hidden",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  img: {
    alignItems: "center",
    padding: 24,
  },
  photo: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#eee",
  },
  watchlist: {
    marginLeft: 16,
  },
  title: {
    color: "#000",
    fontSize: 20,
  },
  watchlistButton: {},
  button: {},
  buttonText: {},
});

export default styles;
