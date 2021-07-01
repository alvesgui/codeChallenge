import styled from "styled-components/native";

export const KeyboardView = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #000;
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
  background-color: white;
`;

export const Input = styled.TextInput`
  border: 2px solid #000;
  margin-bottom: 30px;
  padding: 15px 20px;
  color: #000;
  font-size: 20px;
  border-radius: 9px;
  width: 80%;
`;
