import React from "react";
import styled from "styled-components";

const QuizFinishContainer = styled.div`
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

const FinishText = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }

  @media screen and (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ScoreText = styled.p`
  font-size: 1.5em;
  margin-bottom: 30px;
`;

const RestartButton = styled.button`
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

const TestFinish = (props) => {
  return (
    <QuizFinishContainer>
      <FinishText> Quiz Completed!</FinishText>
      <ScoreText>Your Score: {props.children}</ScoreText>
      <RestartButton disabled>Restart</RestartButton>
    </QuizFinishContainer>
  );
};

export default TestFinish;
