// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = ["Enter the Project Title", "Enter the Project Description" 
, "Enter the Table of Contents separating with space","Enter the Installation Instruction"
, "Enter the Usage Information", "Enter the Credits Instruction"
, "Choose a license", "Enter the Contribution Guidelines"
, "Enter the Tests Instruction"];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'title',
        },
        {
            type: 'input',
            message: questions[1],
            name: 'description',
        },
        {
            type: 'input',
            message: questions[2],
            name: 'contents',
        },
        {
            type: 'input',
            message: questions[3],
            name: 'installation',
        },
        {
            type: 'input',
            message: questions[4],
            name: 'usageInfo'
        },
        {
            type: 'input',
            message: questions[5],
            name: 'creditInfo',
        },
        {
            type: 'checkbox',
            message: questions[6],
            choices: ["None", "MIT License", "Apache License 2.0", "GNU General Public License v3.0"],
            name: 'license',
        },
        {
            type: 'input',
            message: questions[7],
            name: 'contributionInfo',
        },
        {
            type: 'input',
            message: questions[8],
            name: 'testInfo',
        }
    ])
    .then((response) => {
        console.log({response});
    });
}

// Function call to initialize app
init();
