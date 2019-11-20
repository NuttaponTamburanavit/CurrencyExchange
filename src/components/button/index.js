import React from "react";
import ButtonStyle from "./style";

const Button = props => {
  return (
    <ButtonStyle
      className={props.active ? `active-btn` : ``}
      onClick={props.onClick}
    >
      {props.name}
    </ButtonStyle>
  );
};

export default Button;
