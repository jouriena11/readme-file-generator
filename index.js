// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown');


// Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What's your project title?",
        name: "title"
    },
    {
        type: "input",
        message: "What's your project description?",
        name: "description"
    },
    {
        type: "input",
        message: "Please provide installation instructions for your project.",
        name: "installation"
    },
    {
        type: "input",
        message: "Please provide usage information for your project.",
        name: "usage"
    },
    {
        type: "input",
        message: "Please provide contribution guidelines for your project.",
        name: "contribution"
    },
    {
        type: "input",
        message: "Please explain testing procedures for this project.",
        name: "tests"
    },
    {
        type: 'list',
        message: "what's your license type?",
        name: 'license',
        choices: ['Apache 2.0', 'GPLv3', 'MIT', 'Unlicense']
    },
    {
        type: "input",
        message: "what's your GitHub username?",
        name: "github"
    },
    {
        type: "input",
        message: "what's your email address?",
        name: "email"
    }
];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=>{
        if(err) {
            console.log(err);
        }
    })
}

// Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            const data = {
                title: response.title,
                description: response.title,
                installation: response.installation,
                usage: response.usage,
                license: response.license,
                contribution: response.contribution,
                tests: response.tests,
                github: response.github,
                email: response.email
            }
    
            const markdownTxt = markdown.generateMarkdown(data);
            writeToFile('readme1.MD', markdownTxt);
    })
}

// Function call to initialize app
init();