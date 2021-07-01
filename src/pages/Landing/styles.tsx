import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    justifyContent: "center",
    padding: 40,
  },

  logoContainer: {
    alignItems: "center",
  },

  logo: {
    backgroundColor: "#f7f7f7",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000",
    padding: 20,
    fontSize: 100,
    fontFamily: "LondrinaShadow_400Regular",
  },
  textContainer: {
    paddingVertical: 20,
    alignItems: "center",
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 30,
    marginTop: 20,
  },

  subtitle: {
    fontSize: 20,
    lineHeight: 30,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 100,
  },
  button: {
    backgroundColor: "#000",
    borderRadius: 9,
    width: 140,
    padding: 20,
    alignItems: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default styles;
