import { redirect, useRouter } from "next/navigation";
import OnboardingComponent from "@/components/OnboardingComponent";
import { auth } from "@clerk/nextjs/server";
import { use, useEffect } from "react";
import { getProfile } from "@/lib/actions/weather.action";
const Page = async () => {
  const { userId } = auth();
  console.log(userId);
  if (!userId) redirect("/sign-in");
  return <OnboardingComponent userId={userId} />;
};

export default Page;
