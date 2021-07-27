import styled from "styled-components/native";
import colors from "../../styles/colors";

export const KeyboardView = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 30px;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
  width: 100%;
  background-color: #1d5763;
`;

export const Input = styled.TextInput`
  border: 2px solid #fff;
  margin-bottom: 30px;
  padding: 15px 20px;
  color: #fff;
  font-size: 15px;
  border-radius: 9px;
  width: 80%;
`;
