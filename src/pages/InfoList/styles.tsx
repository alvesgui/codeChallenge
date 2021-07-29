import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  subContainer: {
    padding: 30,
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
  info: {
    fontSize: 22,
    marginTop: 20,
  },
  input: {
    height: 40,
    margin: 12,
    width: 200,
    borderWidth: 1,
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
});

export default styles;
