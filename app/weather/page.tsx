import { SignIn, useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
const Page = () => {
  const { user } = useUser();
  if (!user) redirect("/sign-in");
  return <p>Hello</p>;
};

export default Page;
