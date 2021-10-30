// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
let testObj = {
    title: "Harry Potter",
    description: "You're a wizard!"
}

// console.log(generateMarkdown(testObj))
// fs.writeFileSync("test.md", generateMarkdown(testObj))
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please provide the name of your project!',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please provide a project title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please provide a project title!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'yo, license pls:',
        choices: ['MIT', 'ISC', 'Eclipse', 'Mozilla', 'WTFPL']
    },
    
    // {
    //     type: 'input',
    //     name: 'title',
    //     message: 'Please provide the name of your project!',
    //     validate: nameInput => {
    //         if (nameInput) {
    //             return true;
    //         } else {
    //             console.log('Please provide a project title!');
    //             return false;
    //         }
    //     }
    // },
    // {
    //     type: 'input',
    //     name: 'title',
    //     message: 'Please provide the name of your project!',
    //     validate: nameInput => {
    //         if (nameInput) {
    //             return true;
    //         } else {
    //             console.log('Please provide a project title!');
    //             return false;
    //         }
    //     }
    // },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./dist/${fileName}`, data, err => {
        if (err) {
            throw err
        };
        console.log('README created')
    });

};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        fs.writeFile("../Professional_README_generator/dist/test.md", generateMarkdown(answers), err => {
            if (err) throw err;
        })
    })
};

// Function call to initialize app
init();
