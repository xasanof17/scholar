import { SignUp } from "../components";
import { Meta } from "../meta";
import Head from "next/head";

const SignUpPage = () => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
      </Head>
      <Meta
        title="Scholar | Registration"
        description="Scholar Learning Centre - SignUp for own students"
        key=""
      />
      <SignUp />
    </>
  );
};

export default SignUpPage;
