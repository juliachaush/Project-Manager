import styled from "styled-components";

const ButtonText = styled.button`
  background-color: none;
  font-size: 16px;
  padding-right: 12px;
  padding-left: 12px;
`;
export default function TextButton({ onClick, name }) {
  return <ButtonText onClick={onClick}>{name}</ButtonText>;
}
