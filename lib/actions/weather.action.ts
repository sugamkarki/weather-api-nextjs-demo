"use server";
import { auth, currentUser } from "@clerk/nextjs/server";

import { db } from "../db";
interface PROFILE_PROPS {
  userId: string;
  city: string;
  state: string;
}
export const updateProfile = async (props: PROFILE_PROPS) => {
  const userFromDb = await db.user.findUnique({
    where: { userId: props.userId },
  });
  if (!userFromDb) {
    await db.user.create({
      data: {
        userId: props.userId,
        city: props.city,
        state: props.state,
      },
    });
  } else {
    await db.user.update({
      where: { userId: props.userId },
      data: {
        city: props.city,
        state: props.state,
      },
    });
  }
};
export const getProfile = async (userId: string) => {
  return db.user.findUnique({
    where: { userId: userId },
  });
};
