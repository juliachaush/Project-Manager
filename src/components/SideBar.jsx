import styled from "styled-components";
import ContainerButton from "./ContainerButton";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  position: fixed;
  bottom: 0;
  top: 100px;
  background-color: black;
  color: white;
  min-width: 28rem;
  padding-top: 8rem;
  padding-left: 4rem;
  border-top-right-radius: 24px;
`;

const Button = styled.button`
  background-color: gray;
  font-size: 24px;
  padding: 12px 20px;
  border-radius: 12px;
`;

const H2 = styled.h2`
  font-size: 32px;
  padding-bottom: 24px;
  text-transform: uppercase;
  font-weight: bold;
`;

export default function SideBar({}) {
  return (
    <StyledDiv>
      <H2>Your projects</H2>
      <ul>
        <li>
          <ContainerButton name="+ Add project" />
        </li>
      </ul>
    </StyledDiv>
  );
}
