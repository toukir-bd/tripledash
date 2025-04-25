"use client";
import { signOut } from "next-auth/react";
import { Button } from "./ui/button";


const SignOut = () => {
  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className="flex justify-center">
      <Button onClick={handleSignOut} variant="danger">
        Sign Out
      </Button>
    </div>
  );
};

export { SignOut };