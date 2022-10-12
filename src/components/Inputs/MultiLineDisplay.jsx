import {
  InputContainer,
  InputDescription,
  InputIndividual,
  InputLabel,
} from "./inputdis-styles";

import { MultiLine } from "./MultiLine";
import React from "react";

export const MultiLineDisplay = ({ text, rows }) => {
  return (
    <InputContainer>
      <InputIndividual>
        <InputDescription>{text ? text : "Default"} </InputDescription>
        <InputLabel>Label</InputLabel>
        <MultiLine rows={rows}></MultiLine>
      </InputIndividual>
    </InputContainer>
  );
};
