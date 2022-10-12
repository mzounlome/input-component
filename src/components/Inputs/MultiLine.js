import styled from "styled-components";

export const MultiLine = styled.textarea.attrs({
  placeholder: "Placeholder",
})`
  box-sizing: border-box;
  font-family: inherit;
  overflow: hidden;
  height: 300px;

  &:hover {
    border-color: #333333;
  }
  &:focus {
    border-color: "#2962FF";
  }
  border-radius: 10px;
  border-color: #828282;
  padding: 5px;
`;
