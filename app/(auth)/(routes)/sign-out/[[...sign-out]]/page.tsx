"use client";
import { Button } from "@/components/ui/button";
import {
  SignIn,
  SignInButton,
  SignOutButton,
  SignedIn,
  useUser,
} from "@clerk/nextjs";
import { redirect } from "next/navigation";
const Page = () => {
  // const { user } = useUser();
  // if (user)
  return (
    <div className="w-full h-full flex items-center flex-col justify-center">
      <h1>Do ya really wanna sign out of this awesome app?</h1>
      <SignedIn>
        <SignOutButton>
          <Button variant={"destructive"}>Confirm</Button>
        </SignOutButton>
      </SignedIn>
    </div>
  );
  // return redirect("/sign-in");
};

export default Page;
