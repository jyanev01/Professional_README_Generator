// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// let testObj = {
//     title: "Harry Potter",
//     description: "You're a wizard!"
// }

// console.log(generateMarkdown(testObj))
// fs.writeFileSync("test.md", generateMarkdown(testObj))
// TODO: Create an array of questions for user input
const questions = [
    // {
    //     type: 'input',
    //     name: 'title',
    //     message: 'What is the name of your project!',
    //     validate: titleInput => {
    //         if (titleInput) {
    //             return true;
    //         } else {
    //             console.log('Please provide a project title!');
    //             return false;
    //         }
    //     }
    // },
    // {
    //     type: 'input',
    //     name: 'name',
    //     message: 'What is your name?',
    //     validate: nameInput => {
    //         if (nameInput) {
    //             return true;
    //         } else {
    //             console.log('Please provide your name!');
    //             return false;
    //         }
    //     }
    // },
    // {
    //     type: 'input',
    //     name: 'email',
    //     message: 'What is your email address?',
    //     validate: emailInput => {
    //         if (emailInput) {
    //             return true;
    //         } else {
    //             console.log('Please enter an email address!');
    //             return false;
    //         }
    //     }
    // },
    // {
    //     type: 'input',
    //     name: 'github',
    //     message: 'What is your GitHub account?',
    //     validate: githubInput => {
    //         if(githubInput) {
    //             return true;
    //         } else {
    //             console.log('Please provide your GitHub account!');
    //             return false;
    //         }
    //     }
    // },
    // {
    //     type: 'input',
    //     name: 'description',
    //     message: "Please provide a brief description of your project!",
    //     validate: descriptionInput => {
    //         if (descriptionInput) {
    //             return true;
    //         } else {
    //             console.log('Please provide a project description!');
    //             return false;
    //         }
    //     }
    // },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license does your project use? Please select One:',
        choices: ['MIT', 'ISC', 'Eclipse', 'Mozilla', 'WTFPL', 'Unknown'],
        default: 'MIT',
    },
    // {
    //     type: 'input',
    //     name: 'usage',
    //     message: 'Please describe how to use your project?',
    //     validate: usageInput => {
    //         if (usageInput) {
    //             return true;
    //         } else {
    //             console.log('Please brief details on usage/ applications!');
    //             return false;
    //         }
    //     }
    // },
    // {
    //     type: 'input',
    //     name: 'contributors',
    //     message: "How can a user contribute to the this repo?",
    // },
    // {
    //     type: 'input',
    //     name: 'test',
    //     message: 'How can a test be run on your project?',
    //     default: 'npm test'
    // }
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('ReadME.md', data, err => {
        if (err) {
            throw err
        } else {
            console.log('README created!');
        }
    })
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(answers => {
            return generateMarkdown(answers);
        })
        .then(data => {
            return writeToFile(data);
        })
    err => {
        if (err) throw err;
    }
}


// Function call to initialize app
init();
