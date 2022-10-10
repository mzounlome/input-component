import styled from "styled-components";

export const StyledInput = styled.input.attrs({
  type: "text",
  placeholder: "Placeholder",
})`
  &:hover {
    color: #333333;
  }
  &:focus {
    color: #2962ff;
  }
  width: ${({ size }) => (size === "fullWidth" ? "1031px" : "200px")};
  height: ${({ size }) =>
    size === "multiLine" ? "150px" : size === "sm" ? "40px" : "56px"};
  border-radius: 6px;
  margin-left: 50px;
  padding-left: 15px;
  color: ${({ color }) =>
    color === "error" ? "#D32F2F" : color === "valid" ? "#2962FF" : "#828282"};
`;

// export const FrontIcon = styled.div`
//   height: 56px;
//   width: 200px;
//   background-color: purple;
//   margin-left: 15px;
// `;
