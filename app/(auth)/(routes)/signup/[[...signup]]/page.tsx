import { SignedOut, SignIn, SignInButton, SignUp } from "@clerk/nextjs";
import React from "react";

const SignUpPage = () => {
  return (
    <div className="bg-black text-white font-medium font-mono px-2 py-1 rounded-xl text-3xl">
      <SignUp />
    </div>
  );
};

export default SignUpPage;
