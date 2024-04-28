import { SignIn, useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
const Page = () => {
  const { user } = useUser();
  if (!user) return <SignIn />;
  return redirect("/weather");
};

export default Page;
