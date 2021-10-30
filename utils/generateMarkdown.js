// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

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
    return;
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const license = renderLicenseSection(data.license)

  return `# ${data.title}

  ## Table of Contents
  -Description
  -Installation
  -Usage
  -License
  -Contributions
  -Tests
  -Contact

  ## Description
  ${data.description}

  ## Installation

  ## Usage
  ${data.usage}

  ##License
  ${license}

  ##Contributions
  ${data.contributions}

  ##Tests
  ${data.tests}

  ##Contact
  ${data.contact}


Write markdown syntax
and the object that you input
through the function
${data.name}
${license}
`;
}

module.exports = generateMarkdown;
