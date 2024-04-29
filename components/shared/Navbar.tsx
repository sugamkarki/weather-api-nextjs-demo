"use client";
import { SignOutButton, SignedIn } from "@clerk/nextjs";
import router from "next/router";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const redirectToSignOut = () => {
    console.log("clicking");
    return router.push("/sign-out");
  };
  return (
    <nav>
      <SignedIn>
        <Button type="button" onClick={() => redirectToSignOut()}>
          Sign Out
        </Button>
      </SignedIn>
    </nav>
  );
};

export default Page;
