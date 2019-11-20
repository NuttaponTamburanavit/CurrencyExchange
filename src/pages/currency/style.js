import styled from "styled-components";

const CurrencyStyle = styled.div`
  width: 100%;
  height: 100vh;
  background: #e3e7f1;

  display: flex;

  h2 {
    color: #fff;
  }

  input {
    font-size: 18px;
    text-align: right;

    padding: 5px 15px;
    margin-bottom: 10px;

    border: 0;
    border-radius: 4px;
  }

  .currency-container {
    width: 100%;
    margin: auto;

    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .currency-form {
    padding: 15px;
    margin: 5px;
    background: #c6cbef;
    box-shadow: 1px 2px 3px #aaa;

    display: flex;
    flex-direction: column;
  }

  @media only screen and (max-width: 767px) {
    .currency-container {
      flex-direction: column;
    }
  }
`;

export default CurrencyStyle;
