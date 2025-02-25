export const quizQuestions = {
  questions: [
    {
      question: "What is the result of `typeof typeof 1`?",
      answers: ["number", "string", "object", "undefined"],
      correctAnswer: "string",
    },
    {
      question: "What will `console.log(1 === true)` output?",
      answers: ["true", "false", "undefined", "TypeError"],
      correctAnswer: "false",
    },
    {
      question: 'What is the result of `"hello" instanceof Object`?',
      answers: ["true", "false", "undefined", "TypeError"],
      correctAnswer: "false",
    },
    {
      question: "What does `console.log([10] === [10])` return?",
      answers: ["true", "false", "undefined", "TypeError"],
      correctAnswer: "false",
    },
    {
      question:
        'What will the following code output: `console.log(1 + "2" + "2")`?',
      answers: ["122", "5", "14", "undefined"],
      correctAnswer: "122",
    },
    {
      question: 'What is the output of `console.log(3 + 2 + "7")`?',
      answers: ["12", "327", "57", "undefined"],
      correctAnswer: "57",
    },
    {
      question: "What will be the output of `console.log(Math.max())`?",
      answers: ["0", "undefined", "Infinity", "TypeError"],
      correctAnswer: "-Infinity",
    },
    {
      question: "What will be the output of `console.log(1 < 2 < 3)`?",
      answers: ["true", "false", "undefined", "TypeError"],
      correctAnswer: "true",
    },
    {
      question: 'What is the result of `"5" - 3`?',
      answers: ["2", "8", "NaN", "undefined"],
      correctAnswer: "2",
    },
    {
      question: 'What will `console.log(1 - "1")` output?',
      answers: ["0", "1", "undefined", "TypeError"],
      correctAnswer: "0",
    },
    {
      question: "What is the output of `console.log(typeof NaN)`?",
      answers: ["number", "string", "NaN", "undefined"],
      correctAnswer: "number",
    },
    {
      question:
        "What does the following code return: `console.log(typeof (typeof 1))`?",
      answers: ["number", "string", "object", "undefined"],
      correctAnswer: "string",
    },
    {
      question: "What will the following code output: `console.log([] + {})`?",
      answers: ["[object Object]", "{}", "undefined", "TypeError"],
      correctAnswer: "[object Object]",
    },
    {
      question: 'What will the output of `console.log(1 + 2 + "3")` be?',
      answers: ["33", "123", "6", "undefined"],
      correctAnswer: "33",
    },
    {
      question: 'What will be the output of `console.log(+"hello")`?',
      answers: ["NaN", "SyntaxError", "undefined", "TypeError"],
      correctAnswer: "NaN",
    },
    {
      question:
        'What will the following code output: `console.log(!!"false")`?',
      answers: ["false", "true", "undefined", "TypeError"],
      correctAnswer: "true",
    },
    {
      question: "What is the result of `console.log([] + [])`?",
      answers: ["[]", "{}", "0", "undefined"],
      correctAnswer: "",
    },
    {
      question: "What will be the output of `console.log(0.1 + 0.2 === 0.3)`?",
      answers: ["true", "false", "undefined", "TypeError"],
      correctAnswer: "false",
    },
    {
      question:
        "What will be the output of the following code: `console.log(typeof typeof 1)`?",
      answers: ["number", "string", "object", "undefined"],
      correctAnswer: "string",
    },
    {
      question: "What is the output of `console.log(1 === true)`?",
      answers: ["true", "false", "undefined", "TypeError"],
      correctAnswer: "false",
    },
  ],
  flashCards: [{ question: "test question", answer: "test answer" }],
};
