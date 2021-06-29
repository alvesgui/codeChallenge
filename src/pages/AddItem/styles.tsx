import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const KeyboardView = styled.KeyboardAvoidingView`
  align-items: center;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
  },
  title: {
    color: "#000",
    fontSize: 32,
    marginBottom: 48,
    paddingBottom: 16,
    marginTop: 10,
    borderBottomWidth: 0.8,
    borderBottomColor: "#d3d3d3",
  },

  label: {
    color: "#030303",
    marginBottom: 8,
  },

  input: {
    backgroundColor: "#fff",
    borderWidth: 1.4,
    borderColor: "#cbcbcb",
    borderRadius: 20,
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
    backgroundColor: "#000",
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
});

export default styles;
