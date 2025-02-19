"use server";

import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "../../../lib/prisma";

interface NewUser {
  clerkUserId: string;
  username: string;
  email: string;
  profilePic: string;
  userType: string;
}

export const fetchUser = async () => {
  try {
    const clerckUser = await currentUser();
    let mongoUser = null;
    mongoUser = await prisma.user.findUnique({
      where: { clerkUserId: clerckUser?.id },
    });

    //user from clerck does not exist on out db yet, so we check, if it does not exist, meaning prisma.user.findUnique is null, then we create a new user object and create on our data base with prisma.user.create

    if (!mongoUser) {
      let username = clerckUser?.username;

      if (!username) {
        username = clerckUser?.firstName + " " + clerckUser?.lastName;
      }

      const newUser: NewUser = {
        clerkUserId: clerckUser?.id || "",
        username,
        email: clerckUser?.emailAddresses[0].emailAddress || "",
        profilePic: clerckUser?.imageUrl || "",
        userType: "admin",
      };

      mongoUser = await prisma.user.create({
        data: newUser,
      });
    }

    const quizResults = await prisma.quizResult.findMany({
      where: { userId: mongoUser.id },
    });

    //we return the user that we previously created and the results on the data base

    return {
      data: {
        user: mongoUser,
        quizResults,
      },
    };
  } catch (err) {
    console.log(err);
  }
};
