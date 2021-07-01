import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 100,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  subContainer: {
    width: "90%",
    height: 80,
    paddingVertical: 20,
    marginTop: 1,
    backgroundColor: "#fff",
    borderBottomWidth: 0.8,
    borderBottomColor: "#d3d3d3",
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
