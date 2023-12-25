import React, { useState } from "react";
import styled from "styled-components";
import SignoutButton from "./components/SignoutButton";
const QuestionnairePageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 100vh;
  width: 100%;
  background: radial-gradient(
    circle,
    var(--main-background-color),
    var(--main-background-shadow-color)
  );
`;

const QuestionnaireContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 370px;
  max-width: 500px;
  background: white;
  border-radius: 4px;
  padding: 20px;
  box-shadow: 0 0 20px var(--main-background-shadow-color);
`;

const QuestionDiv = styled.p`
  display: flex;
  align-items: center;

  max-height: 60px;
  width: 100%;
  padding-bottom: 5px;
  margin-bottom: 5px;
  border-bottom: 2px solid var(--dark-blue);
  color: var(--dark-blue);
  text-align: center;
  font-weight: 600;
`;
const Options = styled.div`
  width: 100%;
  max-height: 70px;

  padding: 6px;
  margin-top: 10px;
  border: 2px solid var(--dark-blue);
  cursor: pointer;
  &:hover {
    background-color: rgb(223, 247, 252);
  }
`;
const NextButton = styled.button`
  font: 300;
  margin-top: 10px;
  padding: 6px 15px;
  font-weight: 200;
  background-color: var(--button-background);
  border: none;
  border-radius: 4px;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    background-color: var(--button-background-hover);
    border-radius: 20px;
  }
`;

const Questions = () => {
  const [option, setOption] = useState();

  const OptionOnClickHandler = (eve) => {
    console.log(eve.target.innerText);
  };

  return (
    <QuestionnairePageContainer>
      {/* Get ready for an exciting journey of knowledge and fun. */}

      <QuestionnaireContainer>
        <QuestionDiv>
          1.Lorem, ipsum dolor sit amet consectetur adipisicing elit{" "}
        </QuestionDiv>

        <Options onClick={(e) => OptionOnClickHandler(e)}>
          1.Lorem ipsumg elit. Assumenda, non.
        </Options>
        <Options onClick={(e) => OptionOnClickHandler(e)}>
          2. Lorem ipsum dolor sit amet conselit. Assumenda, non.
        </Options>
        <Options onClick={(e) => OptionOnClickHandler(e)}>
          {" "}
          3.Lorem ipsicing elit. Assumenda, non.
        </Options>
        <Options onClick={(e) => OptionOnClickHandler(e)}>
          4.Lorem ipsum dolor sit amet co.
        </Options>

        <NextButton>Next</NextButton>
      </QuestionnaireContainer>
      <SignoutButton/>
    </QuestionnairePageContainer>
  );
};

export default Questions;
