import styled from "styled-components";

export const StyledInput = styled.input.attrs({
  type: "text",
  placeholder: "Placeholder",
})`
  &:hover {
    border-color: #333333;
  }
  &:focus {
    border-color: "#2962FF";
  }
  width: ${({ size }) => (size === "fullWidth" ? "1031px" : "200px")};
  height: ${({ size }) =>
    size === "multiLine" ? "150px" : size === "sm" ? "40px" : "56px"};
  border-radius: 10px;
  margin-left: 50px;
  padding-left: 15px;
  border-color: ${({ color }) =>
    color === "error" ? "#D32F2F" : color === "valid" ? "#2962FF" : "#828282"};
  box-sizing: ${({ size }) => (size === "multiLine" ? "border-box" : "")};
`;
