import { useState, useRef } from "react";

import styled from "styled-components";
import TextButton from "./TextButton";
import Input from "./Input";
import ProjectForm from "./ProjectForm";
import TaskView from "./TaskView";

const ProjectDiv = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  margin-top: 10rem;
  margin-left: 33rem;
  width: 80%;
`;

const HeadWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
`;

const Divider = styled.div`
  border-top: 1px solid #ccc;
  margin: 10px 0;
  width: 60rem;
`;

const H2 = styled.h2`
  font-size: 40px;
  padding-bottom: 16px;
  font-weight: bold;
`;

const H3 = styled.h3`
  font-size: 20px;
  padding-bottom: 24px;
  color: gray;
`;

const H4 = styled.h4`
  font-size: 20px;
  padding-bottom: 24px;
`;

export default function ProjectPage({
  selectedProjectData,
  handleDelateProject,
  handleAddTask,
  handleRemoveTask,
}) {
  const [task, setTask] = useState({
    title: "",
    id: "",
  });

  const [addTask, setAddTask] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setTask((prevTask) => {
      return { ...prevTask, [name]: value };
    });
    setAddTask(true);
  }

  function addTaskHandler(task, selectedProjectDataid) {
    handleAddTask(task, selectedProjectDataid);
    setTask({ title: "", id: "" });
  }

  return (
    <ProjectDiv>
      <HeadWrapper>
        <H2>{selectedProjectData.title}</H2>
        <TextButton
          onClick={() => handleDelateProject(selectedProjectData.id)}
          name="Delete"
        />
      </HeadWrapper>
      <H3>{selectedProjectData.date}</H3>
      <H4>{selectedProjectData.description}</H4>
      <Divider />
      <H2>Tasks</H2>
      <HeadWrapper>
        <Input
          value={task.title}
          name="title"
          type="text"
          label=""
          onChange={handleChange}
        />
        <TextButton
          onClick={() => addTaskHandler(task, selectedProjectData.id)}
          name="Add Task"
        />
      </HeadWrapper>
      {!addTask && <H4>This project does not have any task yet</H4>}
      {selectedProjectData.tasks.map((task) => (
        <TaskView
          key={task.id}
          taskName={task.title}
          onClick={() => handleRemoveTask(task.id, selectedProjectData.id)}
          id={task.id}
        />
      ))}
    </ProjectDiv>
  );
}
