"use client";

import { quizQuestions } from "@/data";
import { useState } from "react";
import { Results } from "./Results";
import { Wrong } from "./Icons/Wrong";
import { Correct } from "./Icons/Correct";

interface ResultObject {
  score: number;
  wrongQuestionsIdx: number[] | null;
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
    wrongQuestionsIdx: null,
  });
  const [showQuestionResult, setShowQuestionResult] = useState(false);

  const questions = quizQuestions.questions;

  const { question, answers, correctAnswer } = questions[activeQuestion];

  const totalQuizLength = questions.length;

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
    setShowQuestionResult(true);
    setResults((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 1,
          }
        : {
            ...prev,
            wrongQuestionsIdx: prev.wrongQuestionsIdx
              ? [...prev.wrongQuestionsIdx, activeQuestion]
              : [activeQuestion],
          }
    );
    window.setTimeout(() => {
      setShowQuestionResult(false);
      setSelectedAnswerIndex(null);
      if (activeQuestion !== totalQuizLength - 1) {
        setActiveQuestion((prev) => prev + 1);
      } else {
        setShowResults(true);
      }
      setChecked(false);
    }, 1000);
  };

  const reStartAction = () => {
    setShowResults(false);
    setActiveQuestion(0);
    setResults({
      score: 0,
      wrongQuestionsIdx: null,
    });
  };

  const handleIncorrectQuestions = (): string[] | null => {
    const array = [];
    if (results.wrongQuestionsIdx) {
      for (const questionIdx of results.wrongQuestionsIdx) {
        array.push(questions[questionIdx].question);
      }
      return array;
    }
    return null;
  };

  return (
    <div className="questionsWrapper">
      {showResults ? (
        <div>
          <p>
            Correct Answers: {results.score} / {totalQuizLength}
          </p>
          {(results.wrongQuestionsIdx && handleIncorrectQuestions()) ?? (
            <Results questions={handleIncorrectQuestions() as string[]} />
          )}

          <button className="btn" onClick={reStartAction}>
            re-start
          </button>
        </div>
      ) : (
        <>
          <div className="questionNumber">
            <p>
              {activeQuestion + 1} / {totalQuizLength}
            </p>
          </div>
          <div className="questionBox">
            <p className="question">{question}</p>

            {answers.map((oneAnswer: string, index: number) => (
              <div
                key={index}
                onClick={() => onAnswerSelected(oneAnswer, index)}
                className={
                  selectedAnswerIndex === index ? "selectedOption" : "option"
                }
              >
                {showQuestionResult && selectedAnswerIndex === index ? (
                  selectedAnswer === correctAnswer ? (
                    <Correct />
                  ) : (
                    <Wrong />
                  )
                ) : null}
                <span className="answer">{oneAnswer}</span>
              </div>
            ))}
          </div>

          <button
            onClick={nextQuestion}
            className={checked ? "btnQuestion" : "btnQuestionDisabled"}
            disabled={!checked}
          >
            {activeQuestion === totalQuizLength - 1 ? "Finish Quizz" : "Next"}
          </button>
        </>
      )}
    </div>
  );
};
