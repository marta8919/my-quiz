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
  flashCards: {
    javascript: [
      {
        question: "What is the difference between null and undefined?",
        answer:
          "Null is a javascript object and undefined is a javascript data type. Both are falsy values tho. undefined typically means the variable has not been declared or haven’t assign it a value. Whereas null normally implies intention.  answer",
      },
      {
        question: "What is the difference between var, let and const?",
        answer:
          "The main difference is scope, const and let are block-scoped, and var is function scoped. Now with this example var is reachable outside the if block, where it is declared, if var is replaced by let or const, won’t be. Const cannot be reassigned, that’s the difference between let and const.",
      },
      {
        question: "What are immediately invoked functions?",
        answer:
          "Anonymous function that is executed immediately after it is declared, also known as self-executing anonymous function. Benefits would be they create a new scope as any function, so basically creating new variables within that function won’t pollute the global namespace. It is also possible to use `await` by creating an async IIFE.",
      },
      {
        question: "What does the spread operator do?",
        answer:
          "Spread operator creates only a shallow copy, which means only the top level structured is copied. Any nested objects (which is the case of the object name), won’t be recursively copied. So, in the case as age it is copied since it’s top level, so it’s primitive values are copied, but for nested objects just as name, only their references are copied.So in this case when doing `person2.name.first` , both person2 and person1 are pointing to the same object.",
      },
      {
        question: "What is a callback function?",
        answer:
          "Callback is a function that is passed to another function as an argument. Commonly used on array methods such as .reduce .forEach .map .",
      },
      {
        question: "What is event propagation?",
        answer:
          "How events travel in nested elements. Has to phases, capturing an bubbling. Bubbling is from the inner most component to the outer most component, whereas capturing is the other way around. Capture happens first tho.",
      },
      {
        question: "What is a short circuit evaluation?",
        answer:
          "Mechanism for what the logical expressions are evaluated only has much as needed. In this case since the first operator is true, it is enough to determine the result of the expression.",
      },
      {
        question: "What are higher order functions?",
        answer:
          "Functions are take other functions or return other functions. Javascript functions are actually objects as type. So basically similar to callback function, with the difference that a higher order function takes at least on function as argument and/or returns another function as output. Callback is the method you pass through, higher order function is the one that consumes that callback.",
      },
      {
        question: "Explain event delegation.",
        answer:
          "Event delegation is a technique involving adding event listeners to a parent element instead of adding them to the descendant elements. The listener will fire whenever the event is triggered on the descendant elements due to event bubbling up the DOM. The benefits of this technique are: Memory footpring goes down because only one single handles is needed on the parent elements, rather than having to attach event handlers on each descendant. And there is no need to unbind the handler from elments that are removed and to bind the event for new elements.",
      },
      {
        question: "Explain array.prototype.reduce().",
        answer:
          'The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value. The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).',
      },
    ],

    // { question: "test question 3", answer: "test answer" },
    // { question: "test question 3", answer: "test answer" },
    // { question: "test question 3", answer: "test answer" },
    // { question: "test question 3", answer: "test answer" },
    // { question: "test question 3", answer: "test answer" },
    // { question: "test question 3", answer: "test answer" },
    // { question: "test question 3", answer: "test answer" },
    // { question: "test question 3", answer: "test answer" },
    // { question: "test question 3", answer: "test answer" },
    // { question: "test question 3", answer: "test answer" },
    // { question: "test question 3", answer: "test answer" },
    // { question: "test question 3", answer: "test answer" },
    // { question: "test question 3", answer: "test answer" },
    // { question: "test question 3", answer: "test answer" },
    // { question: "test question 3", answer: "test answer" },
    // { question: "test question 3", answer: "test answer" },
    // { question: "test question 3", answer: "test answer" },
    // { question: "test question 3", answer: "test answer" },
    // { question: "test question 3", answer: "test answer" },
    // { question: "test question 3", answer: "test answer" },
  },
};
