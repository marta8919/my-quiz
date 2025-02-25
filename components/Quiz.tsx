"use client";

import { quizQuestions } from "@/data";
import { useState } from "react";
import { Results } from "./Results";

interface ResultObject {
  score: number;
  correctAnswers: number;
  wrongQuestions: QuestionObj[] | null;
}

export interface QuestionObj {
  question: string;
  correctAnswer: string;
  answers: string[];
}

export const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(``);
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(
    null
  );
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<ResultObject>({
    score: 0,
    correctAnswers: 0,
    wrongQuestions: null,
  });
  const [repeatMistakenQ, setRepeatMistakenQ] = useState(false);

  const questions = repeatMistakenQ
    ? (results.wrongQuestions as QuestionObj[])
    : quizQuestions.questions;

  const { question, answers, correctAnswer } = questions[activeQuestion];

  const onAnswerSelected = (answer: string, index: number) => {
    setChecked(true);
    setSelectedAnswerIndex(index);
    if (answer === correctAnswer) {
      setSelectedAnswer(answer);
    } else {
      setSelectedAnswer("");
    }
  };

  const nextQuestion = () => {
    setSelectedAnswerIndex(null);
    setResults((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 1,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongQuestions: prev.wrongQuestions
              ? [...prev.wrongQuestions, questions[activeQuestion]]
              : [questions[activeQuestion]],
          }
    );
    if (activeQuestion !== quizQuestions.totalQuestions - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setShowResults(true);
    }
    setChecked(false);
  };

  // el array de preguntas incorrectas se tiene que resetar en algún momento sino se siguen añadiendo eternamente.

  const reStartAction = () => {
    setShowResults(false);
    setActiveQuestion(0);
    setResults({
      score: 0,
      correctAnswers: 0,
      wrongQuestions: [],
    });
  };

  // const repeatWrongQuestions = () => {
  //   setShowResults(false);
  //   setActiveQuestion(0);
  //   setRepeatMistakenQ(true);
  // };

  return (
    <div className="questionsWrapper">
      {showResults ? (
        <div>
          <p>
            Correct Answers: {results.correctAnswers} /{" "}
            {quizQuestions.totalQuestions}
          </p>
          {results.wrongQuestions ? (
            <>
              <Results questions={results.wrongQuestions} />

              {/* <button className="btn" onClick={repeatWrongQuestions}>
                I want to repeat these questions
              </button> */}
            </>
          ) : null}

          <button className="btn" onClick={reStartAction}>
            re-start
          </button>
        </div>
      ) : (
        <>
          <div className="questionNumber">
            <p>
              {activeQuestion + 1} / {quizQuestions.totalQuestions}
            </p>
          </div>
          <div className="question">
            <p>{question}</p>

            {answers.map((oneAnswer: string, index: number) => (
              <div
                key={index}
                onClick={() => onAnswerSelected(oneAnswer, index)}
                className={
                  selectedAnswerIndex === index ? "selectedOption" : "option"
                }
              >
                <span>{oneAnswer}</span>
              </div>
            ))}
          </div>
          <button
            onClick={nextQuestion}
            className={checked ? "btnQuestion" : "btnQuestionDisabled"}
            disabled={!checked}
          >
            {activeQuestion === quizQuestions.totalQuestions - 1
              ? "Finish Quizz"
              : "Next"}
          </button>
        </>
      )}
    </div>
  );
};
