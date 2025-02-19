"use client";

import { useState } from "react";

interface QuizProps {
  questions: {
    question: string;
    answers: string[];
    correctAnswer: string;
    type: string;
  }[];
  userId: string | undefined;
}

export const Quiz = ({ questions, userId }: QuizProps) => {
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

  const { question, answers, correctAnswer } = questions[activeQuestion];

  const onAnswerSelected = (answer: string, indx: number) => {
    setChecked(true);
    setSelectedAnswerIndex(indx);
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
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setShowResults(true);
      fetch("/api/quizResults", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userId,
          quizScore: results.score,
          correctAnswers: results.correctAnswers,
          wrongAnswers: results.wrongAnswers,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not working");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Quiz results saved successfully:", data);
        })
        .catch((error) => {
          console.error("Error saving quiz results:", error);
        });
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
            Correct Answers: {results.correctAnswers} / {questions.length}
          </p>
          <button className="btn" onClick={reStartAction}>
            re-start
          </button>
        </div>
      ) : (
        <>
          <div className="questionNumber">
            <p>
              {activeQuestion + 1} / {questions.length}
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
            {activeQuestion === questions.length - 1 ? "Finish Quizz" : "Next"}
          </button>
        </>
      )}
    </div>
  );
};
