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
    borderColor: "#dcdc",
    borderRadius: 9,
    height: 56,
    paddingVertical: 18,
    paddingHorizontal: 24,
    marginBottom: 16,

    width: 300,
  },
  profile: {
    paddingTop: 0,
  },
  containerButton: {
    alignItems: "center",
  },

  textButtonImage: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#fff",
    textDecorationLine: "underline",
  },
  button: {
    backgroundColor: "#082130",
    borderRadius: 9,
    width: "70%",
    padding: 20,
    alignItems: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 40,
  },
  buttonImage: {
    backgroundColor: "#082130",
    borderRadius: 9,
    width: "55%",
    padding: 20,
    alignItems: "center",
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },

  uploadedImageContainer: { alignItems: "center" },

  uploadedImage: {
    width: 70,
    height: 70,
    borderRadius: 9,
  },
  itemList: {
    marginTop: 10,
  },
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  textTransferred: {
    fontSize: 12,
    color: "#030303",
  },
});

export default styles;
