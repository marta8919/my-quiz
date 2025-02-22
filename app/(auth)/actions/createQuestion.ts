"use server";

import { QuestionType } from "@/types";
import { prisma } from "../../../lib/prisma";

interface QuestionInterface {
  question: string;
  correctAnswer: string;
  answers: string[];
  type: QuestionType;
}

interface ResponseObject {
  code: "OK" | "ERROR";
  message: string;
}

export const createQuestion = async ({
  question,
  correctAnswer,
  answers,
  type,
}: QuestionInterface): Promise<ResponseObject> => {
  let mongoQuestion = null;

  mongoQuestion = await prisma.question.findUnique({
    where: { question: question },
  });

  if (!mongoQuestion) {
    mongoQuestion = await prisma.question.create({
      data: {
        question,
        correctAnswer,
        type,
        answers,
      },
    });

    return { code: "OK", message: "All good" };
  }

  return { code: "ERROR", message: "Seems like the question already exist!" };
};
