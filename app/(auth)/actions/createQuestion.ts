"use server";

import { QuestionType } from "@/types";
import { prisma } from "../../../lib/prisma";

interface QuestionInterface {
  question: string;
  correctAnswer: string;
  answers: string[];
  type: QuestionType;
}

export const createQuestion = async ({
  question,
  correctAnswer,
  answers,
  type,
}: QuestionInterface) => {
  //primero hay que mirar si la pregunta ya existe para no duplicarla
  console.log("calling create question");
  await prisma.question.create({
    data: {
      question,
      correctAnswer,
      type,
      answers
    },
  });
};
