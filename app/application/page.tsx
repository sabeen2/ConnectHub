import { UserButton } from "@clerk/nextjs";
import React from "react";

const HelloPage = () => {
  return (
    <div>
      <UserButton afterSwitchSessionUrl="/" />
    </div>
  );
};

export default HelloPage;
