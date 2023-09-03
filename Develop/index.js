const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a brief description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please provide installation instructions for your project:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide usage information for your project:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Which license would you like to use?',
      choices: ['MIT', 'Apache', 'GPL'],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Please provide contribution guidelines for your project:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please provide test instructions for your project:',
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
  ];

// Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log('README file created successfully!');
  });
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
  # ${data.title}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## License
  
  This project is licensed under the ${data.license} license.
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  ${data.tests}
  
  ## Questions
  
  For additional questions, please contact ${data.name} at ${data.email}.
  `};

// Function call to initialize app
function init() {
    // Prompt the user with the questions
    inquirer.prompt(questions)
      .then((answers) => {
        // Generate the README content from the user's answers
        const readmeContent = generateMarkdown(answers);
        // Write the README file with the generated content
        writeToFile('README.md', readmeContent);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  // Function call to initialize app
  init();