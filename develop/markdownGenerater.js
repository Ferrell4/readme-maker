// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "none":
      license = " ";
      return license;
      break;
    case "MIT":
      license =
        "<br />[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
      return license;
      break;
    case "Apache 2.0":
      license =
        "<br />[![License](https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg)]";
      return license;
      break;
    case "GPL 3.0":
      license =
        "<br />[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
      return license;
      break;
    case "BSD 3":
      license =
        "<br />[![License](https://img.shields.io/badge/License-BSD_3--Clause-orange.svg)]";
      return license;
      break;
  }
}
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "none":
      license = " ";
      return license;
      break;
    case "MIT":
      license = "(https://opensource.org/licenses/MIT)";
      return license;
      break;
    case "Apache 2.0":
      license = "(https://opensource.org/licenses/Apache-2.0)";
      return license;
      break;
    case "GPL 3.0":
      license = "(https://www.gnu.org/licenses/gpl-3.0)";
      return license;
      break;
    case "BSD 3":
      license = "(https://opensource.org/licenses/BSD-3-Clause)";
      return license;
      break;
  }
}
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "none":
      license = " ";
      return license;
      break;
    case "MIT":
      license = "# MIT\n ## MIT License";
      return license;
      break;
    case "Apache 2.0":
      license = "# Apache 2.0\n ## Apache 2.0 License";
      return license;
      break;
    case "GPL 3.0":
      license = "# GNU\n ## GNU GPL v3";
      return license;
      break;
    case "BSD 3":
      license = "# BSD\n ## BSD 3-Clause License";
      return license;
      break;
  }
}

function markdownGenerator(data) {
  renderLicenseBadge(data.license);
  return `# ${data.title}
  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}
  # Table of Contents: 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Tests](#tests)
  - [Contributing](#contributing)
  - [Questions](#questions)
  

  # Description
  ${data.description}

  # Installation
  To install the required dependencies, please run the following command: 
  <pre><code>${data.install}</code></pre>
  
  
  # Usage 
  ${data.use}

  # Tests
  Please use the following command for testing: 
  <pre><code>${data.test}</code></pre>
  

  # Contributing 
  Created by <a href='https://github.com/${data.username}'>${data.username}</a>
  <br />
  Want to contribute? 
  <br />
  ${data.contribute}

  # Questions
   If you have any questions regarding this repository, open an issue or contact me directly via <a href='https://github.com/${
     data.username
   }'>GitHub</a> or by email @ ${data.email}
   
  
`;
}

module.exports = markdownGenerator;
