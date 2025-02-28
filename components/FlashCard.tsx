"use client";
import { quizQuestions } from "@/data";
import Link from "next/link";
import { useState } from "react";
import { Badge } from "./Icons/Badge";
import { AnimatePresence, motion } from "motion/react";

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

  const variants = {
    exit: (direction: number) => {
      return {
        y: direction > 0 ? -1000 : 1000,
        opacity: 0,
      };
    },
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
    <AnimatePresence>
      <motion.div
        key={activeQuestion}
        variants={variants}
        exit="exit"
        transition={{
          y: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 1 },
        }}
        className="flashQuestionsWrapper"
      >
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
                <motion.button
                  whileTap={{ y: 3 }}
                  className="btn"
                  onClick={onClickNext}
                >
                  {finishBtnText ? "Finish" : "Next"}
                </motion.button>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
