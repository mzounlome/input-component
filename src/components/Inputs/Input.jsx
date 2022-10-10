import { MdLocalPhone, MdLock } from "react-icons/md";

import React from "react";
import { StyledInput } from "./style";

const Input = ({
  color,
  disabled,
  helperText,
  startIcon = false,
  endIcon = false,
  size,
  value,
  hover,
  focus,
  icon,
}) => {
  console.log(startIcon);
  console.log(icon);
  return (
    <div className="input-container">
      <StyledInput
        color={color}
        size={size}
        disabled={disabled}
        startIcon={startIcon}
        endIcon={endIcon}
        icon={icon}
      ></StyledInput>
    </div>
  );
};

export default Input;
