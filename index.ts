#! /usr/bin/env node

import inquirer from 'inquirer';

// Define the questions
const questions: inquirer.QuestionCollection = [
  {
    type: 'list',
    name: 'capital',
    message: 'What is the capital of France?',
    choices: ['Berlin', 'Madrid', 'Paris', 'Rome'],
  },
  {
    type: 'input',
    name: 'author',
    message: 'Who wrote "To Kill a Mockingbird"?',
  },
  {
    type: 'confirm',
    name: 'confirm',
    message: 'Is TypeScript a superset of JavaScript?',
    default: true,
  },
];

// Define the correct answers
const answersKey: Record<string, any> = {
  capital: 'Paris',
  author: 'Harper Lee',
  confirm: true,
};

// Function to check answers
const checkAnswers = (answers: Record<string, any>) => {
  let score = 0;
  Object.keys(answersKey).forEach((key) => {
    if (answers[key] === answersKey[key]) {
      score++;
    }
  });
  return score;
};

// Main function to run the quiz
const runQuiz = async () => {
  const answers = await inquirer.prompt(questions);
  const score = checkAnswers(answers);
  console.log(`You scored ${score} out of ${questions.length}`);
};

// Run the quiz
runQuiz();
