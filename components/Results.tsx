export const Results = ({ questions }: { questions: string[] }) => {
  return (
    <div>
      <p>Here are the questions you answered wrong:</p>
      <ul>
        {questions.map((oneQuestion, index) => (
          <li key={index}>{oneQuestion}</li>
        ))}
      </ul>
    </div>
  );
};
