import React from "react";

// const QUESTION_DATA = [
//   {
//     question: (
//       <span>Which of the following is TRUE about reflows and repaints?</span>
//     ),
//     answers: [
//       <span>They're the same thing.</span>,
//       <span>
//         Repaints (or redraws) occur when elements change their visual styles but
//         not layout.
//       </span>,
//       <span>
//         Reflows compute layout, are more performance critical, and occur when
//         elements are inserted, removed, moved, animated, etc.
//       </span>,
//       <span>The previous two answers are correct.</span>,
//     ],
//     correct: 3,
//   },
//   {
//     question: <span>What are the three types of JavaScript errors?</span>,
//     answers: [
//       <span>Parse Errors, Syntax Errors and Runtime Errors.</span>,
//       <span>Loading Errors, Runtime Errors and Logic Errors.</span>,
//       <span>Syntax Errors, Logic Errors and Loading Errors.</span>,
//       <span>Bad Errors, Very Bad Errors, and Fatal Errors.</span>,
//     ],
//     correct: 1,
//   },
//   {
//     question: <span>What's a closure?</span>,
//     answers: [
//       <span>
//         An inner function that has access to an outer function's variables, even
//         after the outer function has executed.
//       </span>,
//       <span>A stateful function; a function that preserves state.</span>,
//       <span>
//         The combination of a function and the lexical environment within which
//         that function was declared.
//       </span>,
//       <span>All of the above.</span>,
//     ],
//     correct: 3,
//   },
//   {
//     question: (
//       <span>
//         Where might you find, or how might you use a closure in JavaScript?
//       </span>
//     ),
//     answers: [
//       <span>When currying or implementing partial application.</span>,
//       <span>To emulate private methods.</span>,
//       <span>In event handlers, timers, and asynchronous callbacks.</span>,
//       <span>All of the above.</span>,
//     ],
//     correct: 3,
//   },
//   {
//     question: (
//       <span>
//         Which of these is a use case for the <code>bind</code>,{" "}
//         <code>call</code>, or <code>apply</code> methods?
//       </span>
//     ),
//     answers: [
//       <span>
//         You can use <code>call</code> or <code>apply</code> to borrow methods
//         from other objects.
//       </span>,
//       <span>
//         You can use <code>bind</code> for partial function application.
//       </span>,
//       <span>
//         If you're using the <code>map</code> method to run a function on an
//         array and you need to preserve the <code>this</code> context, you can
//         use <code>bind</code>.
//       </span>,
//       <span>All of the above.</span>,
//     ],
//     correct: 3,
//   }
// ];

var questionJSXgenerator = function (questions) {
  let outputs = [];
  questions.forEach((question) => {
    if(question.answers.length === 4){ 
    let q = {
      question: <span> {question.question}</span>,
      answers: [
        <span>{question.answers[0]}</span>,
        <span>{question.answers[1]}</span>,
        <span>{question.answers[2]}</span>,
        <span>{question.answers[3]}</span>,
      ],
      correct: question.correct-1,
    };
    outputs.push(q);
    }
  });
  return outputs;
};

export default questionJSXgenerator;
