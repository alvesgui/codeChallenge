import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#223a57",
  },
  subContainer: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  msgTopic: {
    paddingBottom: 0,
    marginTop: 40,
  },
  wrapperContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#000",
    marginHorizontal: 20,
  },
  containerButton: {
    alignItems: "center",
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
    paddingVertical: 15,
    paddingHorizontal: 24,
    marginBottom: 16,
    width: 250,
  },
  label: {
    color: "#fff",
    marginBottom: 15,
    fontSize: 15,
    fontWeight: "bold",
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
  sendMsg: {
    paddingVertical: 30,
  },
});

export default styles;
