import React from "react";
import styled from "styled-components";
import userLogo from "../assets/user.png";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--main-background-color);
`;

const LoginForm = styled.div`
  text-align: center;
  max-width: 400px;
  width: 90%;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 20px var(--main-background-shadow-color);
  background-color: var(--white);
`;

const LoginLogo = styled.img`
  height: 100px;
  width: 100px;
  margin: 10px auto;

  @media screen {
  } ///////////////////////add media query
`;

const GoogleButton = styled.button`
  background-color: var(--button-background);
  color: #fff;
  padding: 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: var(--button-background-hover);
    border-radius: 20px;
  }
`;

const GoogleLogo = styled.img`
  width: 30px; /* Adjust size as needed */
  height: 30px; /* Adjust size as needed */
  margin-right: 10px;
`;

////other variables
const gglLogoURL =
  "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-vector-graphic-pixabay-15.png";

const LoginPage = () => {
  /////HOOKS
  const navigate = useNavigate();

  const loginWithGoogleFunction = useSelector((state) => state.firebase.login);

  ////stored this function in redux
  const handleGoogleLogin = async () =>
    await loginWithGoogleFunction(() => navigate());

  return (
    <LoginPageContainer>
      <LoginForm>
        <LoginLogo src={userLogo} />

        <GoogleButton onClick={handleGoogleLogin}>
          <GoogleLogo src={gglLogoURL} alt="Google Logo" />
          Login with Google
        </GoogleButton>
      </LoginForm>
    </LoginPageContainer>
  );
};

export default LoginPage;
