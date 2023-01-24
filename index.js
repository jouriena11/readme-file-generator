// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// const generateMarkdown = require('./utils/generateMarkdown')


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

function createLicenseBadge(license) {
    if(license == 'Apache 2.0') {
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    } else if(license == 'GPLv3') {
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    } else if(license == 'MIT') {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    } else {
        return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
    }
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
    
    const {title, description, installation, usage, license, contribution, tests, github, email} = data;
    // generateMarkdown(data);

    // TODO: to add walkthrough video link -- Line 121
    const readmeInfo = 
`${createLicenseBadge(license)}<br>
This application is covered under ${license} license.<br>
    
# **${title}**

## **Project Description**
${description}

---
## **Table of Contents**
- <a href="#installation">Installation</a>
- <a href="#usage">Usage</a>
- <a href="#contributions">Contributions</a>
- <a href="#testing-procedures">Testing Procedures</a>
- <a href="#contacts">Contacts</a>

---
## **Installation**
${installation}

---
## **Usage**
${usage}

---
## **Contributions**
${contribution}

---
## **Testing Procedures**
${tests}

---
## **Contacts**

Please feel free to contact me via the following GitHub or Email address if you have additional questions about this project.

**GitHub Username:** [${github}](https://github.com/${github})

**Email:** ${email}`;

    writeToFile('readme.MD', readmeInfo);
    })
}

// Function call to initialize app
init();