// Needed Apps
const inquirer = require('inquirer')
const { createLogo } = require('./lib/shapes');
const fs = require('fs');
// Array of questions for user input
const questions = [
    {
        type: "input",
        message: "Please enter the text you would like to display. (No more than three characters)",
        name: "svgText",
        validate: (value) => {
            if (value.length < 1) {
                return "Please enter text for your logo."
            } else  if (value.length > 3){
                return "The text entered is too long, please enter a maximum of three characters."
            } else {
                return true
            }
        }
    },
    {
        type: "input",
        message: "What color would you like the text to be?",
        name: "svgTextColor",
        validate: (value) => {
            if (value.length < 1) {
                return "Please enter a text color."
            } else {
                return true
            }
        }
    },

    {
        type: "list",
        message: "Which shape would you like for your logo?",
        choices: ["Circle", "Triangle", "Square"],
        name: "svgShape"
    },

    {
        type: "input",
        message: "What color would you like your shape to be?",
        name: "svgShapeColor",
        validate: (value) => {
            if (value.length < 1) {
                return "Please enter a shape color."
            } else {
                return true
            }
        }
    }
];

// Function to initialize
const init = async () => {
    try {
    const inputs = await inquirer.prompt(questions)
    const finalLogo = createLogo(inputs)
    
    fs.writeFile('logoGen.svg', finalLogo, function(err) {
        if (err) {
            console.log(err)
        }
        else {
            console.log('Successfully generated logoGen.svg')
        }
    })
    } catch (error) {
        console.log(error)
    }
}

// Function call to initialize app
init();
