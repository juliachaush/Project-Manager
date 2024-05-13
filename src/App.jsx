import styled from "styled-components";
import { useState } from "react";

import SideBar from "./components/SideBar";
import icon from "./assets/no-projects.png";
import ProjectForm from "./components/ProjectForm";
import ContainerButton from "./components/ContainerButton";
import ProjectPage from "./components/ProjectPage";

const Image = styled.img`
  with: 100px;
  height: 100px;
`;
const H1 = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const H3 = styled.h3`
  font-size: 20px;
  margin-bottom: 32px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 200px;
  margin-left: 20%;
`;

function App() {
  const [addProject, setAddProject] = useState(false);
  const [projectData, setprojectData] = useState(null);

  function handleClick() {
    setAddProject(true);
    console.log("hhhh");
  }

  function handleDataProject(data) {
    setprojectData(data);
  }

  return (
    <>
      <SideBar />
      {addProject && <ProjectForm onData={handleDataProject} />}

      {projectData && <ProjectPage onData={projectData} />}
      {!addProject && (
        <Wrapper>
          <Image src={icon} alt="Мое изображение" />
          <H1>No project Selected</H1>
          <H3>Select a project or start a new one</H3>
          <ContainerButton onClick={handleClick} name="Create new project" />
        </Wrapper>
      )}
    </>
  );
}

export default App;
