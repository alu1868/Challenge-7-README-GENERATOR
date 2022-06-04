// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Unlicense") {
    selectLicense = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]`
  } else if (license === "GNU AGPLv3") {
    selectLicense = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]`
  } else if (license === "GNU GPLv3") {
    selectLicense = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`
  } else if (license === "GNU LGPLv3") {
    selectLicense = `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)]`
  } else if (license === "Mozilla Public License 2.0") {
    selectLicense = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`
  } else if (license === "Apache License 2.0") {
    selectLicense = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
  } else if (license === "MIT License") {
    selectLicense = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
  } else if (license === "BoostSoftware License 1.0") {
    selectLicense = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`
  } else {
    selectLicense = "";
  }
  return selectLicense
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Unlicense") {
    return "https://choosealicense.com/licenses/unlicense/"
  } else if (license === "GNU AGPLv3") {
    return "https://choosealicense.com/licenses/agpl-3.0/"
  } else if (license === "GNU GPLv3") {
    return "https://choosealicense.com/licenses/gpl-3.0/"
  } else if (license === "GNU LGPLv3") {
    return "https://choosealicense.com/licenses/lgpl-3.0/"
  } else if (license === "Mozilla Public License 2.0") {
    return "https://choosealicense.com/licenses/mpl-2.0/"
  } else if (license === "Apache License 2.0") {
    return "https://choosealicense.com/licenses/apache-2.0/"
  } else if (license === "MIT License") {
    return "https://choosealicense.com/licenses/mit/"
  } else if (license === "BoostSoftware License 1.0") {
    return "https://choosealicense.com/licenses/bsl-1.0/"
  } else {
    return "";
  }
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "") {
    return ""
  } else {
    return `Copyright (C) ${new Date().getFullYear}
    ${license}.
    Read more at: ${renderLicenseLink(license)}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  1. [Description](#Description)
  2. [Installation Instructions](#Installation)
  3. [Usage Instructions](#Usage)
  4. [Testing Instructions](#Testing)
  5. [License](#License)
  6. [Contributors](#Contributors)
  7. [Questions](#Questions)


  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Testing
  ${data.testing}

  ## License
  ${renderLicenseSection(data.license)}

  ## Contributors
  In collaboration with: ${data.contributors}  

  ## Questions
  For further questions, you can reach out to me by:
  email: ${data.email}
  GitHub: github.com/${data.github}
`;
}

module.exports = generateMarkdown;
