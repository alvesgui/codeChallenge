import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#223a57",
  },
  containerAdd: { alignItems: "center" },
  title: {
    color: "#fff",
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    fontSize: 24,
    marginBottom: 15,
    paddingBottom: 16,
    borderBottomWidth: 0.8,
    borderBottomColor: "#d3d3d3",
  },

  label: {
    color: "#fff",
    marginBottom: 8,
    fontSize: 15,
    fontWeight: "bold",
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

  inputPort: {
    backgroundColor: "#fff",
    borderWidth: 1.4,
    borderColor: "#fff",
    borderRadius: 9,
    height: 56,
    paddingVertical: 18,
    paddingHorizontal: 24,
    marginBottom: 16,
    width: 150,
  },

  profile: {
    paddingTop: 0,
  },
  containerButton: {
    justifyContent: "center",
    alignItems: "center",
  },

  clearSession: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  buttonClear: {
    backgroundColor: "#fff",
    borderRadius: 9,
    width: 100,
    height: 55,
    alignItems: "center",
  },

  button: {
    backgroundColor: "#082130",
    borderRadius: 9,
    width: "40%",
    padding: 20,
    alignItems: "center",
    fontWeight: "bold",
    marginTop: 40,
  },

  buttonDesc: {
    backgroundColor: "#cf0e0e",
    borderRadius: 9,
    width: "50%",
    padding: 20,
    alignItems: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 40,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
  },

  buttonTextClear: {
    color: "#000",
    fontSize: 16,
    alignItems: "center",
  },

  itemList: {
    marginTop: 10,
  },
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});

export default styles;
