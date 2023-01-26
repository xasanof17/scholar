import React from "react";
import { SignUp } from "../components";
import { Meta } from "../meta";

const SignUpPage = () => {
  return (
    <>
      <Meta
        title="Scholar | SignUp"
        description="Scholar Learning Centre - SignUp for own students"
        key="scholar signup"
      />
      <SignUp />
    </>
  );
};

export default SignUpPage;
