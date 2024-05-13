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
  width: 80%;
`;

export default function ProjectForm({ onData }) {
  const [userData, setUserData] = useState({
    title: "",
    description: "",
    date: "",
  });

  const [clickStatus, setClickStatus] = useState(false);

  const hideForm = !clickStatus ? { display: "flex" } : { display: "none" };

  function handleChange(event) {
    const { name, value } = event.target;
    setUserData((prevUserData) => {
      return { ...prevUserData, [name]: value };
    });
  }

  function sendDataProject() {
    onData(userData);
    setClickStatus(true);
  }

  return (
    <FormDiv style={hideForm}>
      <div>
        <TextButton name="Cancel" />
        <ContainerButton name="Save" onClick={sendDataProject} />
      </div>
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
            type="data"
            label="due date"
            onChange={handleChange}
          />
        </li>
      </ul>
    </FormDiv>
  );
}
