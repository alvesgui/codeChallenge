import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
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
    marginBottom: 20,
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
    marginTop: 40,
    justifyContent: "space-between",
  },
  button: {
    height: 150,
    width: "40%",
    backgroundColor: "#f7f7f7",
    borderRadius: 8,
    borderWidth: 10,
    borderColor: "#000",
    padding: 24,
    justifyContent: "space-between",
  },

  buttonText: {
    color: "#000",
    fontSize: 18,
  },
});

export default styles;
