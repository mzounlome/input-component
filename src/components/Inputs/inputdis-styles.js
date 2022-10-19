import styled from "styled-components";

export const StyledHeaderContainer = styled.div`
  height: 60px;
  width: 100%;
`;

export const InputHeader = styled.h2`
  color: #4f4f4f;
  padding-top: 10px;
  padding-left: 75px;
`;

export const InputContainer = styled.div`
  width: 80%;
  display: flex;
  margin-top: 35px;
  padding-left: 50px;
  height: 100px;
`;

export const InputIndividual = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
`;

export const InputLabel = styled.label`
  font-size: 0.8rem;
  margin-left: 75px;
  color: ${({ color }) =>
    color === "error" ? "#D32F2F" : color === "valid" ? "#2962FF" : "#828282"};
`;

export const InputSelf = styled.div`
  display: flex;
  align-items: center;
`;

export const InputDescription = styled.p`
  font-size: 0.7rem;
  color: #828282;
  margin-left: 75px;
  padding-bottom: 15px;
`;

export const Icon = styled.div`
  position: absolute;
  ${({ startIcon, endIcon }) =>
    startIcon ? "left: 200px" : endIcon ? "right: 50px" : ""};

  flex: 0 0;
`;

export const HelperText = styled.p`
  font-size: 0.7rem;
  padding-left: 50px;
  padding-top: 5px;
  color: ${({ color }) =>
    color === "error" ? "#D32F2F" : color === "valid" ? "#2962FF" : "#828282"};
`;

export const InputFooter = styled.footer`
  color: #4f4f4f;
  font-size: 0.8rem;
  width: 287px;
  height: 17px;
  left: 319px;
  top: 1543px;
  margin-left: 450px;
  margin-top: 100px;
`;

export const FooterText = styled.p`
  padding-left: 15px;
  font-size: 0.7rem;
  color: #828282;
`;
