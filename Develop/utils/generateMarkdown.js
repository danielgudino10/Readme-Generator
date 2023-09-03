// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  const badges = {
    'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'Apache 2.0': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'GPL 3.0': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
  };

  return badges[license] || '';
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  const links = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
    'GPL 3.0': 'https://www.gnu.org/licenses/gpl-3.0',
  };

  return links[license] || '';
}

// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  const sections = {
    'MIT': 'Licensed under the [MIT License](https://opensource.org/licenses/MIT).',
    'Apache 2.0': 'Licensed under the [Apache License, Version 2.0](https://opensource.org/licenses/Apache-2.0).',
    'GPL 3.0': 'Licensed under the [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0).',
  };

  return sections[license] || '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

${licenseBadge}

## License

${licenseSection}

${licenseLink}
`;
}

module.exports = generateMarkdown;
