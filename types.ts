export enum UserType {
  regular = "regular",
  admin = "admin",
}

export enum QuestionType {
  quiz = "quiz",
  flashCard = "flash",
}

export interface ResultObject {
  score: number;
  wrongQuestionsIdx: number[] | null;
}

export interface QuestionObj {
  question: string;
  correctAnswer: string;
  answers: string[];
}

export interface FlashQuestionObj {
  question: string;
  answer: string;
}

export interface QuizSetUp {
  customLength: number;
  timer: boolean;
  seconds: number;
}

export interface FlashSetUp {
  customLength: number;
}

interface FlashCard {
  theme: string;
  length: number;
  storeIncorrect: boolean;
  incorrectArray: number[];
  score: number;
}

export interface Context {
  quiz: QuizSetUp;
  flashcards: FlashCard;
}
