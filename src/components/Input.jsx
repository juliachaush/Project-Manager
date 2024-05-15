import styled from "styled-components";

const Label = styled.label`
  font-size: 18px;
  padding-bottom: 24px;
  text-transform: uppercase;
  font-weight: bold;
  color: gray;
`;

const InputInner = styled.input`
  background-color: #e5e4e2;
  border-radius: 4px;
  min-height: 48px;
  width: 100%;
  margin-bottom: 16px;
  padding: 12px;
`;

export default function Input({ label, ...props }) {
  return (
    <>
      <Label>
        <h2>{label}</h2>
        <InputInner {...props} />
      </Label>
    </>
  );
}
