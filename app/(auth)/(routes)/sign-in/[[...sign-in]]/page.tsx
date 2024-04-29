"use client";
import { Button } from "@/components/ui/button";
import { SignIn, SignInButton, useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
const Page = () => {
  const { user } = useUser();
  if (!user)
    return (
      <div className="w-full h-full flex items-center justify-center">
        <SignInButton mode="modal">
          <Button variant={"destructive"}>Sign In</Button>
        </SignInButton>
      </div>
    );
  return redirect("/weather");
};

export default Page;
