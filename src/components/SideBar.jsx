import styled from "styled-components";
import ContainerButton from "./ContainerButton";
import ProjectPage from "./ProjectPage";

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

const Li = styled.li`
  background-color: #252525;
  font-size: 24px;
  margin-bottom: 16px;
  padding-left: 1rem;
  max-width: 20rem;
`;

const Ul = styled.ul`
  margin-top: 24px;
`;

export default function SideBar({
  projectData,
  onAddProjectClick,
  onProjectClick,
}) {
  return (
    <StyledDiv>
      <H2>Your projects</H2>
      <ContainerButton onClick={onAddProjectClick} name="+ Add project" />
      <Ul>
        {projectData.map((project) => (
          <Li onClick={() => onProjectClick(project)} key={project.id}>
            {project.title}
          </Li>
        ))}
      </Ul>
    </StyledDiv>
  );
}
