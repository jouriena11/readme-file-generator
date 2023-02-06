// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let result = ''
  if(license) {
    result = `[![License](https://img.shields.io/badge/License-${license}-blue.svg)]`
  }
  return result
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license) {
    return '';
  } else if(license == 'GPLv3'){
    return '(https://opensource.org/licenses/gpl-3.0)';
  } else {
    return `(https://opensource.org/licenses/${license.replace(' ','-')})`;
  }
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license){
    return ''; // return also stops codes that follow
  }
  return `${renderLicenseBadge(license)}${renderLicenseLink(license)}
  <br>This application is covered under ${license} license.`
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  
  const {title, description, installation, usage, license, contribution, tests, github, email} = data;
  
  const readmeInfo = 
`
${renderLicenseSection(license)}

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

Click this [link]() for a walkthrough video of this application.

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

return readmeInfo;

}

module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
  generateMarkdown
};
