const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
      {
        type: 'input',
        message: 'What is your project name?',
        name: 'description',
      },
      {
        type: 'input',
        message: 'What does your project do?',
        name: 'description',
      },
      {
        type: 'input',
        message: 'How is this project logged?',
        name: 'description',
      },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //  return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(responses =>{
        writeToFile('Readme.md', generateMarkdown({...responses})) // file type, generateMardown(...responses)
    })
}

// Function call to initialize app
init();
