"use client";

import { createQuestion } from "@/app/(auth)/actions/createQuestion";
import { QuestionType } from "@/types";
import { ChangeEvent, FormEvent, useState } from "react";

export const Form = () => {
  const [isQuiz, setIsQuiz] = useState(true);
  const [question, setQuestion] = useState("");
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState<number>(0);
  const [error, setError] = useState("");
  const [answersArray, setAnswersArray] = useState(["", "", "", ""]);

  const handleSelectQuestionType = () => {
    setIsQuiz(!isQuiz);
  };

  const handleCreateQuestion = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createQuestion({
      question: question,
      correctAnswer: answersArray[correctAnswerIndex],
      answers: answersArray,
      type: isQuiz ? QuestionType.quiz : QuestionType.flashCard,
    });
  };

  const handleChangeQuestion = (event: ChangeEvent<HTMLInputElement>) => {
    setQuestion(event.target.value);
  };

  const setArrayOfAnswers = (
    index: number,
    event: FormEvent<HTMLInputElement>
  ) => {
    const newArr = answersArray.map((one, i) => {
      if (i == index) {
        return event.currentTarget.value;
      } else {
        return one;
      }
    });
    setAnswersArray(newArr);
  };

  const handleCorrectAnswerQuiz = (index: number) => {
    setCorrectAnswerIndex(index);
  };

  return (
    <div className="page">
      <div className="formWrapper">
        {error ? (
          <>
            <div>{error}</div>
            <button className="btn" onClick={() => setError("")}>
              Try again
            </button>
          </>
        ) : (
          <form onSubmit={handleCreateQuestion}>
            <div>
              <p>Question:</p>
              <input
                id="question"
                name="question"
                type="text"
                placeholder="Example question"
                required
                className="customInput"
                value={question}
                onChange={(event) => handleChangeQuestion(event)}
              />
            </div>
            <div>
              <p>Question type:</p>
              <div id="option" className="questionTypeRadio">
                <div>
                  <input
                    type="radio"
                    value={"quiz"}
                    id="quizOption"
                    name="option"
                    onChange={handleSelectQuestionType}
                    checked={isQuiz}
                  />
                  <label htmlFor="quizOption">Quiz</label>
                </div>
                <div>
                  <input
                    type="radio"
                    value={"flash-card"}
                    id="flashOption"
                    name="option"
                    onChange={handleSelectQuestionType}
                    checked={!isQuiz}
                  />
                  <label htmlFor="flashOption">Flash card</label>
                </div>
              </div>
            </div>

            {isQuiz ? (
              <div className="addedAnswers">
                <div className="optionAnswers">
                  <p>Answers:</p>

                  {answersArray.map((one, index) => (
                    <input
                      type="text"
                      id="answer"
                      name="answer"
                      onInput={(e) => setArrayOfAnswers(index, e)}
                      key={index}
                    />
                  ))}
                </div>
                <div className="selectCorrectSection">
                  <p>Select correct one:</p>
                  {answersArray.map((one, index) => (
                    <input
                      type="radio"
                      name="correctAnswer"
                      onInput={() => handleCorrectAnswerQuiz(index)}
                      key={index}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <p>Flash Card explanation:</p>
                <textarea />
              </div>
            )}

            <button className="btn" type="submit">
              Create
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
