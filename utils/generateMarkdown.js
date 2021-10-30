// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == 'MIT'){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license == 'ISC') {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
  } else if (license == 'Eclipse') {
    return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
  } else if (license == 'Mozilla') {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  } else if (license == 'WTFPL') {
    return `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`;
  } else {
    return `No License`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

//included at the end of the renderLicenseSection() as part of the last 'else' statement 

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license == 'MIT'){
    return `MIT `;
  } else if (license == 'ISC') {
    return `ISC `;
  } else if (license == 'Eclipse') {
    return `Eclipse `;
  } else if (license == 'Mozilla') {
    return ` MPL 2.0 `;
  } else if (license == 'WTFPL') {
    return `WTFPL `;
  } else {
    return `No license selected!`;
  }

  
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const license = renderLicenseSection (data.license) +  renderLicenseBadge(data.license)

  return `# ${data.title}
  # ${license}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation] (#installation)
  * [Usage] (#usage)
  * [License] (#license)
  * [Contributions] (#contributions)
  * [Tests] (#test)
  * [Contact] (#contact)

  

  ## Installation
  * INSTALL: npm install
  * RUN: node index.js

  ## Usage
  ${data.usage}

  ## License
  ${license}

  ## Contributions
  ${data.contributions}

  ## Tests
  ${data.tests}

  ## Contact
  If you have any questions please contact me ${data.name} at: ${data.email} 
  For more projects please visit my GitHub : https://github.com/${data.github}
`;
}

module.exports = generateMarkdown;
