"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello!
      <Button
        onClick={() => {
          router.push("/sign-in");
        }}
        variant={"destructive"}
      >
        Lets Get Started
      </Button>
    </main>
  );
}
