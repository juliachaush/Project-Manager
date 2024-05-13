import styled from "styled-components";

const ButtonText = styled.button`
  background-color: none;
  font-size: 16px;
  padding: 12px 24px;
`;
export default function TextButton({ name }) {
  return <ButtonText>{name}</ButtonText>;
}
