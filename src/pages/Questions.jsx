import React, { useEffect, useState } from "react";
import "../../src/App.css";
import styled from "styled-components";
import SignoutButton from "./components/SignoutButton";
import { useSelector } from "react-redux";
import TestFinish from "./components/TestFinish";
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
const QuizMessage = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 10px 0;
`;

const Questions = () => {
  ///states///
  const [index, setindex] = useState(0);
  const [highlightedOption, setHighlightedOption] = useState(null);
  const [userAnswer, setUserAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [questionArrayLength, setQuestionArrayLength] = useState();
  const [status, setStatus] = useState(false);
  const [buttonName, SetButtonName] = useState("Next");
  const [showQuestions, setShowQuestions] = useState(true);
  const [attempts, setAttempts] = useState(0);
const [username,setUsername]=useState()
  
  ///states///
  const getuser =useSelector((state)=>state.auth.userDetails) || false///async
  const quizApiStatus = useSelector((state) => state.quiz.status) || false; /////async
  const questions = useSelector((state) => state.quiz.questions) || false; /////async
  const [question, setQuestion] = useState();

  console.log(getuser)
  
  useEffect(() => {
    //setUsername(getituser);

    setQuestion(questions[index]);
    /////api status
    if (quizApiStatus === "succeeded") {
      setStatus(true);
    } else {
      setStatus(false);
    }

    ////////check question object length
    if (status) {
      setQuestionArrayLength(questions.length);
    } else {
      setQuestionArrayLength(0);
    }

    /////when questions end
    if (questionArrayLength - 1 > index) {
      SetButtonName("Next");
    } else {
      SetButtonName("Finish");
    }

    //user name
    if(getuser){
setUsername(getuser.name)}

  }, [questions, index, quizApiStatus, status, questionArrayLength,getuser]);

  const OptionOnClickHandler = (eve, idx) => {
    setUserAnswer(eve.target.innerText);
    setHighlightedOption(idx);
    
    console.log(idx);
  };

  const nextOnclickHandler = () => {
    ///next Change
    setindex((prev) => prev + 1);
    setQuestion(questions[index]);

    //answer evaluation
    if (question.answer) {
      if (question.answer === userAnswer) {
        setScore((prev) => prev + 1);
      } else {
        setScore((prev) => prev);
      }
    }
    /////finish
    if (buttonName === "Finish") {
      setShowQuestions(false);
      setAttempts((prev) => prev + 1);
    }
  };



  return (
    <QuestionnairePageContainer>
   { getuser &&showQuestions&&  <QuizMessage>Hello {username}, Welcome to the quiz. Good luck and enjoy!</QuizMessage>}
      {!showQuestions && <TestFinish>{score}</TestFinish>}
      {showQuestions && question && (
        <QuestionnaireContainer>
          <QuestionDiv>{question.question}</QuestionDiv>

          {question.options.map((option, idx) => (
            <Options
              key={idx}
              className={highlightedOption === idx ? "selectedOption" : ""}
              onClick={(e) => OptionOnClickHandler(e, idx)}
            >
              {option}
            </Options>
          ))}

          <NextButton
            onClick={() => nextOnclickHandler()}
            className={"backgroundColor:blue"}
          >
            {buttonName}
          </NextButton>
        </QuestionnaireContainer>
      )}

      <SignoutButton />
    </QuestionnairePageContainer>
  );
};

export default Questions;
