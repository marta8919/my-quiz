"use client";

import { quizQuestions } from "@/data";
import { useState } from "react";

export const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(``);
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(
    null
  );
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { question, answers, correctAnswer } =
    quizQuestions.questions[activeQuestion];

  const onAnswerSelected = (answer: string, indx: number) => {
    setChecked(true);
    setSelectedAnswerIndex(indx);
    if (answer === correctAnswer) {
      setSelectedAnswer(answer);
    } else {
      setSelectedAnswer("");
      //here I should store the incorrect questions so they can be rendered on the results section
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
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );
    if (activeQuestion !== quizQuestions.totalQuestions - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setShowResults(true);
    }
    setChecked(false);
  };

  const reStartAction = () => {
    setShowResults(false);
    setActiveQuestion(0);
  };

  return (
    <div className="questionsWrapper">
      {showResults ? (
        <div>
          <p>
            Correct Answers: {results.correctAnswers} /{" "}
            {quizQuestions.totalQuestions}
          </p>
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
