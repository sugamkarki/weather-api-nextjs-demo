"use client";
import { getProfile } from "@/lib/actions/weather.action";
import { SignIn, useUser } from "@clerk/nextjs";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import type { User } from "@prisma/client";
import axios from "axios";
import { Button } from "@/components/ui/button";
const Page = () => {
  const [userFromDb, setUserFromDb] = useState<User>();
  const [weather, setWeather] = useState<any>();
  const { user } = useUser();
  const router = useRouter();

  if (!user) redirect("/sign-in");
  const redirectToOnboarding = () => {
    console.log("clicking");
    router.push("/onboarding");
  };
  useEffect(() => {
    getProfile(user.id).then((profile) => {
      if (!profile) return router.push("/onboarding");

      if (profile?.city === "" || profile?.state === "")
        redirect("/onboarding");
      setUserFromDb(profile);
      console.log(process.env.NEXT_PUBLIC_WEATHER_API_KEY);
      // https://api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${profile.city},${profile.state},CA&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
        )
        .then((response) => {
          console.log(response.data);
          setWeather(response.data);
        });
    });
  }, [ router]);
  return (
    <div className="flex m-2 flex-col justify-center items-center">
      <h1>
        Your Currently Selected City is: {userFromDb?.city} and the state is{" "}
        {userFromDb?.state}{" "}
      </h1>
      <br />
      <Button onClick={() => redirectToOnboarding()}>Change City</Button>
      <br />
      <pre>{JSON.stringify(weather, null, 2)}</pre>
    </div>
  );
};

export default Page;
