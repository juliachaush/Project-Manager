import styled from "styled-components";
import { useState } from "react";

import SideBar from "./components/SideBar";
import icon from "./assets/no-projects.png";
import ProjectForm from "./components/ProjectForm";
import ContainerButton from "./components/ContainerButton";
import ProjectPage from "./components/ProjectPage";
import TaskView from "./components/TaskView";

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
  const [startAddingProject, setStartAddingProject] = useState(true);
  const [projectData, setprojectData] = useState([]);
  const [addProject, setAddProject] = useState(false);
  const [openProject, setOpenProject] = useState(false);
  const [selectedProjectData, setSelectedProjectData] = useState({});

  function handleAddProject() {
    setStartAddingProject(false);
    setAddProject(true);
    setOpenProject(false);
  }

  function handleDataProject(data) {
    setStartAddingProject(true);
    setprojectData((prevProjectData) => {
      return [...prevProjectData, ...data];
    });
  }

  function handleOpenProject(project) {
    setStartAddingProject(false);
    setAddProject(false);
    setOpenProject(true);
    setSelectedProjectData(project);
  }

  function delateProject(id) {
    const newProjectData = projectData.filter((project) => project.id !== id);
    setprojectData(newProjectData);
  }

  function handleDelateProject(id) {
    setStartAddingProject(true);
    setOpenProject(false);
    delateProject(id);
  }

  function handleCancelAddingProject() {
    setStartAddingProject(true);
    setAddProject(false);
  }

  function handleAddTask(task, id) {
    const updateProjectData = projectData.map((project) => {
      if (project.id === id) {
        const ddd = {
          ...task,
          id: Math.floor(Math.random() * (10000 - 1000 + 1)),
        };

        console.log(ddd);
        return {
          ...project,
          tasks: [...project.tasks, ddd],
        };
      } else return project;
    });

    setprojectData(updateProjectData);

    updateProjectData.map((project) => {
      if (project.id === id) {
        setSelectedProjectData(project);
      }
    });
  }

  function handleRemoveTask(taskId, projectId) {
    const updateTasksData = projectData.map((project) => {
      if (project.id === projectId) {
        const updateTaskArr = project.tasks.filter(
          (task) => task.id !== taskId
        );

        return { ...project, tasks: [...updateTaskArr] };
      } else return project;
    });

    setprojectData(updateTasksData);

    setSelectedProjectData(
      updateTasksData.find((project) => project.id === projectId)
    );
  }

  return (
    <main>
      <SideBar
        projectData={projectData}
        onAddProjectClick={handleAddProject}
        onProjectClick={handleOpenProject}
      />
      {addProject && (
        <ProjectForm
          setProject={setAddProject}
          handleDataProject={handleDataProject}
          handleCancelAddingProject={handleCancelAddingProject}
        />
      )}

      {openProject && (
        <ProjectPage
          selectedProjectData={selectedProjectData}
          handleDelateProject={handleDelateProject}
          handleAddTask={handleAddTask}
          handleRemoveTask={handleRemoveTask}
        />
      )}
      {startAddingProject && (
        <Wrapper>
          <Image src={icon} alt="Мое изображение" />
          <H1>No project Selected</H1>
          <H3>Select a project or start a new one</H3>
          <ContainerButton
            onClick={handleAddProject}
            name="Create new project"
          />
        </Wrapper>
      )}
    </main>
  );
}

export default App;
