import styled from "styled-components";

const Label = styled.label`
  font-size: 18px;
  padding-bottom: 24px;
  text-transform: uppercase;
  font-weight: bold;
  color: gray;
`;

const InputInner = styled.input`
  background-color: #d2d3d3;
  border-radius: 4px;
  min-height: 48px;
  min-width: 720px;
  margin-bottom: 16px;
  padding-left: 16px;
`;

export default function Input({ label, ...props }) {
  return (
    <>
      <Label>
        <h2>{label}</h2>
        <InputInner {...props} type="text" />
      </Label>
    </>
  );
}
