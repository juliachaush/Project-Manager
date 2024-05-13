import styled from "styled-components";
import TextButton from "./TextButton";
import Input from "./Input";
import ProjectForm from "./ProjectForm";

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

export default function ProjectPage() {
  return (
    <ProjectDiv>
      <HeadWrapper>
        <H2>Learning Project</H2>
        <TextButton name="Delete" />
      </HeadWrapper>
      <H3>Dec 29, 2024</H3>
      <H4>Learn React from the group up</H4>
      <H4>Start with the basics, finish with advanced knowledge</H4>
      <Divider />
      <H2>Tasks</H2>
      <HeadWrapper>
        <Input />
        <TextButton name="Add Task" />
      </HeadWrapper>
      <H4>This project does not have any task yet</H4>
    </ProjectDiv>
  );
}
