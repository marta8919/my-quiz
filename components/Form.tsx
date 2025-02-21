"use client";

import { useState } from "react";

export const Form = () => {
  const [isQuizz, setIsQuizz] = useState(true);

  const selectOption = () => {
    setIsQuizz(!isQuizz);
  };

  const createQuestion = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    console.log("what is inside?", e);
  };

  return (
    <div className="page">
      <div className="formWrapper">
        <form onSubmit={createQuestion}>
          <div>
            <p>Question:</p>
            <input
              id="question"
              name="question"
              type="text"
              placeholder="Example question"
              required
              className="customInput"
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
                  onChange={selectOption}
                  checked={isQuizz}
                />
                <label htmlFor="quizOption">Quiz</label>
              </div>
              <div>
                <input
                  type="radio"
                  value={"flash-card"}
                  id="flashOption"
                  name="option"
                  onChange={selectOption}
                  checked={!isQuizz}
                />
                <label htmlFor="flashOption">Flash card</label>
              </div>
            </div>
          </div>

          {isQuizz ? (
            <div className="addedAnswers">
              <div className="optionAnswers">
                <p>Answers:</p>

                <input type="text" id="answer1" name="answer1" />

                <input type="text" id="answer2" name="answer2" />

                <input type="text" id="answer3" name="answer3" />

                <input type="text" id="answer4" name="answer4" />
              </div>
              <div className="selectCorrectSection">
                <p>Select correct one:</p>
                <input type="radio" name="correctAnswer" />
                <input type="radio" name="correctAnswer" />
                <input type="radio" name="correctAnswer" />
                <input type="radio" name="correctAnswer" />
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
      </div>
    </div>
  );
};
