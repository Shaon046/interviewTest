import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SignoutButton from "./components/SignoutButton";

// Styled components for styling
const PageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WelcomeMessage = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
`;

const MessageAboveButton = styled.p`
  font-size: 16px;
  margin-bottom: 40px;
`;

const CenteredButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
`;

const StartConfirmation = () => {
const navigate=useNavigate()
const [start,setStart]=useState(false)
const [buttonCliked,setButtonClicked]=useState("")

  const confirmHandler = () => {


setStart(true)
navigate('/assesment')
    console.log("clicked");
  };





  return (
    <>
<PageContainer >
        <WelcomeMessage>Welcome to My Page</WelcomeMessage>
        <MessageAboveButton>This automated assessment system is tailored for interview selection, streamlining the process by presenting targeted questions to candidates on the screen, facilitating a more efficient and objective evaluation of their qualifications and suitability for the position</MessageAboveButton>
        <CenteredButton onClick={() => confirmHandler()}>
          Click me!
        </CenteredButton>
        <SignoutButton/>
      </PageContainer>



    </>
  );
};

export default StartConfirmation;
