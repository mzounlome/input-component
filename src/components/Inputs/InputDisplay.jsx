import {
  FooterText,
  InputContainer,
  InputFooter,
  InputHeader,
  StyledHeaderContainer,
} from "./inputdis-styles";

import Input from "./Input";
import { MultiLineDisplay } from "./MultiLineDisplay";
import React from "react";

const InputDisplay = () => {
  return (
    <div>
      <StyledHeaderContainer>
        <InputHeader>Inputs</InputHeader>
      </StyledHeaderContainer>
      <InputContainer>
        <Input text="Input" />
        <Input text="a:hover" />
        <Input text="a:focus" color="valid" />
      </InputContainer>
      <InputContainer>
        <Input text="Input error" color="error" />
        <Input text="a:hover" />
        <Input text="a:focus" color="error" />
      </InputContainer>
      <InputContainer>
        <Input text="Input disabled" disabled />
      </InputContainer>
      <InputContainer>
        <Input text="helperText" helperText />
        <Input text="helperText" color="error" helperText />
      </InputContainer>
      <InputContainer>
        <Input text="Start Icon" startIcon />
        <Input text="End Icon" endIcon />
      </InputContainer>
      <InputContainer>
        <Input text="value=text" />
      </InputContainer>
      <InputContainer>
        <Input text="Medium size" />
        <Input text="Small size" size="sm" />
      </InputContainer>
      <InputContainer>
        <Input text="Full Width" size="fullWidth" />
      </InputContainer>
      <InputContainer>
        <MultiLineDisplay text="Multi-Line" rows="10"></MultiLineDisplay>
      </InputContainer>
      <InputFooter>
        <FooterText>created by mzounlome - devChallenges.io</FooterText>
      </InputFooter>
    </div>
  );
};

export default InputDisplay;
