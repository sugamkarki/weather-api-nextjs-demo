"use client";
import { SignOutButton, SignedIn } from "@clerk/nextjs";
import router from "next/router";
import { Button } from "../ui/button";

const Page = () => {
  return (
    <nav>
      <SignedIn>
        <SignOutButton redirectUrl={"/sign-in"}>
          <Button>Sign Out</Button>
        </SignOutButton>
      </SignedIn>
    </nav>
  );
};

export default Page;
