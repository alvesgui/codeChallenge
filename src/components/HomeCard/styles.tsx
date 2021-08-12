import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {},
  photo: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#eee",
  },
  container: {
    alignItems: "center",
    backgroundColor: "#1d5763",
  },
  card: {
    marginTop: 20,
    backgroundColor: "#082130",
    borderRadius: 10,
    width: "90%",
    padding: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: "#cbcbcb",
  },
  cardNo: {
    marginTop: 20,
    backgroundColor: "#dcdcdc",
    borderRadius: 10,
    width: "90%",
    padding: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: "#cbcbcb",
  },
  text: {
    fontSize: 18,
    color: "#fff",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  textNo: {
    fontSize: 18,
    color: "#000",
    textShadowColor: "rgba(255, 255, 255, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});

export default styles;
