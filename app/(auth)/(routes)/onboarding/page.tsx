import { redirect } from "next/navigation";
import OnboardingComponent from "@/components/OnboardingComponent";
import { auth } from "@clerk/nextjs/server";
const Page = async () => {
  const { userId } = auth();
  console.log(userId);
  if (!userId) redirect("/sign-in");
  return <OnboardingComponent />;
};

export default Page;
