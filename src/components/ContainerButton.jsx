import styled from "styled-components";
const Button = styled.button`
  background-color: green;
  font-size: 16px;
  padding: 12px 24px;
  border-radius: 12px;
  color: white;
`;
export default function ContainerButton({ onClick, name }) {
  return <Button onClick={onClick}>{name}</Button>;
}
