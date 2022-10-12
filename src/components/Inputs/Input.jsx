import {
  HelperText,
  Icon,
  InputDescription,
  InputIndividual,
  InputLabel,
  InputSelf,
} from "./inputdis-styles";
import { MdLocalPhone, MdLock } from "react-icons/md";

import React from "react";
import { StyledInput } from "./input-styles";

export const Input = ({
  color,
  disabled,
  helperText,
  startIcon = false,
  endIcon = false,
  size,
  value,
  multiline,
  text,
}) => {
  return (
    <div className="input-container">
      <InputIndividual>
        <InputDescription>{text ? text : "Default"} </InputDescription>
        <InputLabel color={color}>Label</InputLabel>
        <InputSelf>
          {startIcon ? (
            <Icon>
              <MdLocalPhone />
            </Icon>
          ) : (
            ""
          )}
          <StyledInput
            color={color}
            size={size}
            disabled={disabled}
          ></StyledInput>
          {endIcon ? (
            <Icon>
              <MdLock />
            </Icon>
          ) : (
            ""
          )}
        </InputSelf>
        {helperText ? (
          <HelperText color={color}>That's some interesting text</HelperText>
        ) : (
          ""
        )}
      </InputIndividual>
    </div>
  );
};

export default Input;
