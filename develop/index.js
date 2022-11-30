const inquirer = require("inquirer");
const fs = require("fs");
const generate = require("./utils/generateMarkdown");
// creates an array for questions
const questions = [
  "What is your GitHub username?",
  "What is your email?",
  "What is your projects name?",
  "Please write a short description of your project.",
  "What type of license does your project have?",
  "What command should be run to install dependencies?",
  "What command should be run to run tests?",
  "What does the user need to know about using this repo?",
  "What does the user need to know about contributing to the repo?",
];

function writeToFile(fileName, data) {
  fs.writeFileSync("README.md", fileName);
}

// a function that initializes the app
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "username",
        message: questions[0],
      },
      {
        type: "input",
        name: "email",
        message: questions[1],
      },
      {
        type: "input",
        name: "title",
        message: questions[2],
      },
      {
        type: "input",
        name: "description",
        message: questions[3],
      },
      {
        type: "list",
        name: "license",
        message: questions[4],
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "none"],
      },
      {
        type: "input",
        name: "install",
        message: questions[5],
      },
      {
        type: "input",
        name: "test",
        message: questions[6],
      },
      {
        type: "input",
        name: "use",
        message: questions[7],
      },
      {
        type: "input",
        name: "contribute",
        message: questions[8],
      },
    ])
    .then((data) => {
      const fileName = generate(data);
      writeToFile(fileName, data);
      console.log("README.md Created!");
    })
    .catch((err) => {
      console.log("Error!" + err);
    });
}
// Function call to initialize app
init();
