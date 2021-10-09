// TODO: Include packages needed for this application
const { prompt } = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
  },
  {
    type: "list",
    name: "badge",
    message: "What license badge?",
    choices: ["Apache", "Boost", "None"],
  },
  {
    type: "input",
    name: "description",
    message: "What is your project description",
  },
  {
    type: "input",
    name: "install",
    message: "What are you installation instructions?",
  },
  {
    type: "input",
    name: "usage",
    message: "What is your usage information?",
  },
  {
    type: "input",
    name: "contribute",
    message: "Who contributed?",
  },
  {
    type: "input",
    name: "tests",
    message: "What are your test instructions?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your Github username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
];
//use switch statement to give back link badge for badge choice

// Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => (err ? console.log(err) : console.log("Successfully created a READme!")));
}

// Create a function to initialize app
function init() {
  prompt(questions).then((answers) => {
    const markDownPageContent = generateMarkdown(answers);
    writeToFile(`${answers.fileName}.md`, markDownPageContent);
  });
}

// Function call to initialize app
init();
