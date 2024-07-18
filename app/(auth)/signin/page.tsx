import { SignedOut, SignInButton } from "@clerk/nextjs";
import React from "react";

const SignInPage = () => {
  return (
    <div className="bg-black text-white font-medium font-mono px-2 py-1 rounded-xl text-3xl">
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </div>
  );
};

export default SignInPage;
