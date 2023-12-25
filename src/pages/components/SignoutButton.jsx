import React from "react";
import { auth } from "../../api/firebase";
import { signOut } from "firebase/auth";
import styled from "styled-components";

const Button = styled.button`
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

const SignoutButton = () => {
  const onClickHandler = () => {
    console.log("signout");
    signOut(auth);
  };

  return (
    <div>
      <Button onClick={() => onClickHandler()}>signOut</Button>
    </div>
  );
};

export default SignoutButton;
