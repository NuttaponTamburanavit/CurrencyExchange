import styled from "styled-components";

const ButtonStyle = styled.div`
  display: inline-block;

  background-color: #e3e7f1;
  padding: 15px 25px;
  margin: 2px;

  cursor: pointer;

  &.active-btn {
    background-color: #8186d5;
    color: white;
  }

  &:hover {
    background-color: #494ca2;
    color: white;
  }

  @media only screen and (max-width: 767px) {
    padding: 10px 14px;
  }
`;

export default ButtonStyle;
