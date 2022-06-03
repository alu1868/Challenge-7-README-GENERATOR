// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    // Title of project
    {
        type: "input",
        name: "title",
        message: "What is the title of your project? (REQUIRED)",
        // checks to see if any input was recieved
        validate: title => {
            if (titleInput) {
                return true;
            } else {
                console.log("project title is REQUIRED")
                return false;
            }
        }
    },

    // enter description of project
    {
        type: "input",
        name: "description",
        message: "Please provide a description for your project (REQUIRED)",
        // checks to see if any input was recieved
        validate: description => {
            if (descriptionInput) {
                return true;
            } else {
                console.log("project description is REQUIRED")
                return false
            }
        }
    },

    // instructions for installation
    {
        type: "input",
        name: "installation",
        message: "Please provide steps for installation of your project (optional)"
    },

    // instructions to use
    {
        type: "input",
        name: "usage",
        message: "Please provide instructions for how to use your project (optional)"
    },

    // instructions for testing
    {
        type: "input",
        name: "testing",
        message: "Please provide instructions for how to test your project (optional"
    },

    // choose your license
    {
        type: "checkbox",
        name: "license",
        message: "Please select the license for your project",
        choices: ["Unlicense", "GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "MIT License", "BootSoftware License 1.0"]
    },

    // contributors
    {
        type: "input",
        name: "contributors",
        message: "Please list the contributors to your project"
    },

    // enter email
    {
        type: "input",
        name: "github",
        message: "Please provide your forwarding email (REQUIRED)",
        validate: email => {
            if (emailInput) {
                return true
            } else {
                console.log("Forwarding email is REQUIRED")
                return false
            }
        }
    },

    // enter your github
    {
        type: "input",
        name: "github",
        message: "Please provide your GitHub username (REQUIRED)",
        validate: github => {
            if (githubInput) {
                return true;
            } else {
                console.log("GitHub username is REQUIRED")
                return false
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("./README.md", generateMarkdown(data), function(err){
        if (err) {
            return console.err(err);
        }
        console.log("README has been generated")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then ((data) => {
        writeToFile(data);
    })
}

// Function call to initialize app
init();
