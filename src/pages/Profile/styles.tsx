import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerAdd: { alignItems: "center" },
  title: {
    color: "#000",
    fontSize: 24,
    marginBottom: 15,
    paddingBottom: 16,
    borderBottomWidth: 0.8,
    borderBottomColor: "#d3d3d3",
  },

  label: {
    color: "#030303",
    marginBottom: 8,
    fontSize: 15,
    fontWeight: "bold",
  },

  input: {
    backgroundColor: "#fff",
    borderWidth: 1.4,
    borderColor: "#030303",
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

  buttonDesc: {
    backgroundColor: "#cf0e0e",
    borderRadius: 9,
    width: "70%",
    padding: 20,
    alignItems: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 40,
  },

  buttonNo: {
    backgroundColor: "#cbcbcb",
    borderRadius: 9,
    width: "70%",
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
