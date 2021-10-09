// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache":
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;

    case "Boost":
      return `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt);`;

    default:
      return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ___

  ${renderLicenseBadge(data.badge)}
  
  ## Table of Context
___
  ### [Description] (#Description)
  ### [Installation] (#Installation)
  ### [Usage] (#Usage)
  ### [Contributing] (#Contributing)
  ### [Tests] (#Tests)
  ### [Questions] (#Questions)
___

  ## Description {#Description}

  ${data.description}

  ## Installation {#Installation}

  ${data.install}

  ## Usage {#Usage}

  

  ## Contributing {#Contributing}
  
  ${data.name}

  ## Tests {#Tests}

  ${data.tests}

  ## Questions {#Questions}

  Please contact ${data.name} with questions at:
  ${data.name}'s [Github page] (https://github.com/${data.github})
  <${data.email}>

`;
}

module.exports = generateMarkdown;
