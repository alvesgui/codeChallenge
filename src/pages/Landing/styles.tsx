import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1d5763",
    justifyContent: "space-around",
    padding: 40,
  },

  logoContainer: {
    alignItems: "center",
  },
  img: {
    height: 300,
  },
  title: {
    fontSize: 24,
    lineHeight: 38,
    fontFamily: "Jost_400Regular",
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },

  subTitle: {
    fontSize: 22,
    lineHeight: 38,
    fontFamily: "Jost_400Regular",
    textAlign: "center",
    color: "#fff",
  },

  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 9,
    width: 150,
    padding: 20,
    alignItems: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
  },
  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
