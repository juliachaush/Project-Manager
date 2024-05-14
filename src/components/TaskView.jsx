import styled from "styled-components";
import TextButton from "./TextButton";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #e5e4e2;
  color: black;
  max-width: 60rem;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 24px;
`;

const H2 = styled.h2`
  font-size: 20px;
`;

export default function TaskView({ taskName, onClick, ...props }) {
  return (
    <StyledDiv {...props}>
      <H2>{taskName}</H2>
      <TextButton onClick={onClick} name="Clear" />
    </StyledDiv>
  );
}
