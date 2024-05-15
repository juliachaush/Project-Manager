import { useState, useRef } from "react";

import styled from "styled-components";
import Input from "./Input";
import ContainerButton from "./ContainerButton";
import TextButton from "./TextButton";

const FormDiv = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  margin-top: 10rem;
  margin-left: 33rem;
  max-width: 45rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;
  justify-content: right;
`;

export default function ProjectForm({
  handleDataProject,
  setProject,
  handleCancelAddingProject,
}) {
  const [userData, setUserData] = useState({
    title: "",
    description: "",
    date: "",
    tasks: [],
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setUserData((prevUserData) => {
      return { ...prevUserData, [name]: value };
    });
  }

  function sendDataProject() {
    handleDataProject([
      {
        ...userData,
        ...{ id: Math.floor(Math.random() * (10000 - 1000 + 1)) },
      },
    ]);
    setProject(false);
  }

  return (
    <FormDiv>
      <ButtonWrapper>
        <TextButton onClick={handleCancelAddingProject} name="Cancel" />
        <ContainerButton name="Save" onClick={sendDataProject} />
      </ButtonWrapper>
      <ul>
        <li>
          <Input
            value={userData.title}
            name="title"
            type="text"
            label="title"
            onChange={handleChange}
          />
        </li>
        <li>
          <Input
            value={userData.description}
            name="description"
            type="text"
            label="description"
            onChange={handleChange}
          />
        </li>
        <li>
          <Input
            value={userData.date}
            name="date"
            type="date"
            label="due date"
            onChange={handleChange}
          />
        </li>
      </ul>
    </FormDiv>
  );
}
