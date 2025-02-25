export const Results = ({
  questions,
  score,
  reStartAction,
}: {
  questions: string[] | null;
  score: string;
  reStartAction: () => void;
}) => {
  return (
    <div className="resultsWrapper">
      <div className="resultFirstLine">
        <span>Your score is:</span>
        <span>{score}</span>
      </div>
      {questions ? (
        <div className="wrongQuestionsList">
          <p>Here are the questions you answered wrong:</p>
          <ul>
            {questions.map((oneQuestion, index) => (
              <li key={index}>{oneQuestion}</li>
            ))}
          </ul>
        </div>
      ) : null}

      <button className="btn" onClick={reStartAction}>
        re-start
      </button>
    </div>
  );
};
