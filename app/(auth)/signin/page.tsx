import { protectedPaths } from "@/app/utils/protected-paths-utlils";
import { ClerkProvider, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const SignInPage = () => {
  return (
    <div>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </div>
  );
};

export default SignInPage;
