import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#223a57",
    width: "100%",
  },
  containerButton: { alignItems: "center" },
  subContainer: {
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapperContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  containerMsg: {
    backgroundColor: "#fff",
    borderWidth: 1.4,
    borderColor: "#fff",
    borderRadius: 9,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#000",
    marginHorizontal: 20,
  },
  info: {
    fontSize: 22,
    marginTop: 20,
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1.4,
    borderColor: "#fff",
    borderRadius: 9,
    height: 56,
    paddingVertical: 18,
    paddingHorizontal: 24,
    marginBottom: 16,
    width: 300,
  },

  inputMen: {
    backgroundColor: "#fff",
    borderWidth: 1.4,
    borderColor: "#fff",
    borderRadius: 9,
    height: 56,
    paddingVertical: 80,
    paddingHorizontal: 24,
    marginBottom: 16,
    width: 300,
  },
  photo: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#eee",
  },
  button: {
    backgroundColor: "#082130",
    borderRadius: 9,
    width: "70%",
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
  text: {
    paddingTop: 60,
    color: "#fff",
    fontSize: 16,
  },
  label: {
    color: "#fff",
    marginBottom: 8,
    fontSize: 15,
    fontWeight: "bold",
  },
  buttonClear: {
    backgroundColor: "#EEAD2D",
    borderRadius: 9,
    width: 100,
    padding: 20,
    alignItems: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  msg: {
    color: "#000",
    marginBottom: 8,
    padding: 5,
    fontSize: 15,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
    borderBottomWidth: 0.8,
    borderBottomColor: "#cbcbcb",
  },
  sendMsg: {
    paddingVertical: 30,
  },
});

export default styles;
