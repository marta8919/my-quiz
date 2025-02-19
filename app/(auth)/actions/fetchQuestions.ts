"use server";

import { prisma } from "../../../lib/prisma";

export const fetchQuestions = async ({ type }: { type: "quiz" | "flash" }) => {
  try {
    const questions = await prisma.question.findMany({
      where: { type: type },
    });
    return questions;
  } catch (err) {
    console.log(err);
  }
};
