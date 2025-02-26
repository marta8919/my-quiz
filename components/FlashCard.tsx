"use client";
import { quizQuestions } from "@/data";
import Link from "next/link";
import { useState } from "react";
import { Badge } from "./Icons/Badge";

export const FlashCard = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [whatNext, setWhatNext] = useState(false);

  const questions = quizQuestions.flashCards;

  const { question, answer } = questions[activeQuestion];

  const totalLength = questions.length;

  const onClickNext = () => {
    if (activeQuestion !== totalLength - 1) {
      setActiveQuestion((prev) => prev + 1);
      setShowAnswer(false);
    } else {
      setWhatNext(true);
    }
  };

  const finishBtnText = activeQuestion == totalLength - 1;

  const reStartFlash = () => {
    setActiveQuestion(0);
    setShowAnswer(false);
    setWhatNext(false);
  };

  if (whatNext) {
    return (
      <div className="flashQuestionsWrapper">
        <div className="flashQuestion">
          <Badge />
          <p>Congrats! you are done with the flashcard!</p>
          <p>What do you want to do next?</p>
          <div className="flashBtnWrapper">
            <Link href="/">
              <button className="btn">Home</button>
            </Link>
            <Link href="/quiz">
              <button className="btn">Quiz</button>
            </Link>
            <button className="btn" onClick={reStartFlash}>
              FlashCards
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flashQuestionsWrapper">
      <div className="flashQuestion">
        <p className="questionNumber">
          {activeQuestion + 1}/{totalLength}
        </p>
        {!showAnswer ? (
          <>
            <p className="flashQuestionText">{question}</p>
            <div className="flashBtnWrapper">
              <button className="btn" onClick={onClickNext}>
                {finishBtnText ? "Finish" : "Next"}
              </button>
              <button className="btn" onClick={() => setShowAnswer(true)}>
                See solution
              </button>
            </div>
          </>
        ) : (
          <>
            <p>{answer}</p>
            <div className="nextBtnFlash">
              <button className="btn" onClick={onClickNext}>
                {finishBtnText ? "Finish" : "Next"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
