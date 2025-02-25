import { QuestionObj } from "./Quiz";

export const Results = ({ questions }: { questions: QuestionObj[] }) => {
  return (
    <div>
      <p>Here are the questions you answered wrong:</p>
      <ul>
        {questions.map((oneQuestion, index) => (
          <li key={index}>{oneQuestion.question}</li>
        ))}
      </ul>
    </div>
  );
};
