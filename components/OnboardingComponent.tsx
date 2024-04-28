"use client";
import { cities } from "@/constants/cities";
import { useState } from "react";
import { Button } from "./ui/button";
import { updateProfile } from "@/lib/actions/weather.action";
import { useUser } from "@clerk/clerk-react";
import { useRouter } from "next/navigation";
const OnboardingComponent = () => {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const { user } = useUser();
  const router = useRouter();
  if (!user) return null;
  const submitHandler = async () => {
    if (!city) return setError("Please select a city");
    const [c, state] = city.split(",");
    await updateProfile({ city: c, state, userId: user.id });
    router.push("/weather");
  };
  return (
    <div className="flex items-center justify-center flex-col gap-10">
      <h1>Select your City</h1>
      <p className="text-red-600">{error}</p>
      <div className="flex flex-wrap">
        <select
          onChange={(event) => {
            setCity(event.target.value);
          }}
        >
          <option value="">Select City</option>
          {cities.map((city, i) => (
            // make a dropdown selection for the cities
            <option key={i} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
      <div>You Have Selected {city}</div>
      <Button onClick={() => submitHandler()}>Submit</Button>
    </div>
  );
};

export default OnboardingComponent;
