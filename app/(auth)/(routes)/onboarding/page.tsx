"use client";
import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { cities } from "@/constants/cities";
import { Button } from "@/components/ui/button";
import { useState } from "react";
const Page = () => {
  const [city, setCity] = useState("");
  const { user } = useUser();
  //   if (!user) redirect("/sign-in");
  return (
    <div className="flex items-center justify-center flex-col gap-10">
      <h1>Select your City</h1>
      <div
        className="flex flex-wrap"
        onChange={(event) => {
          setCity((event.target as HTMLInputElement).value);
        }}
      >
        <select>
          {cities.map((city, i) => (
            // make a dropdown selection for the cities
            <option key={i} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
      <div>You Have Selected {city}</div>
      <Button>Submit</Button>
    </div>
  );
};

export default Page;
