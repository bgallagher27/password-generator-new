const inquirer = require("inquirer");

// class to concatenate the character responses
class PasswordCharacters {
    constructor(characters) {
        this.characters = characters;

    console.log(JSON.stringify(...characters));
    };

};

class Password { 
    constructor(length, inputs) {
        this.length = length;
        this.inputs = inputs;
    };
};

// Initializing the prompt questions
const questions = [
    {
        type: "number",
        message: "How many characters do you want in your password?",
        name: "characters"
    },
    {
        type: "checkbox",
        message: "Please choose the types of characters in your password:",
        choices: [
            "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            "abcdefghijklmnopqrstuvwxyz",
            "!@$%&*",
            "0123456789",
        ],
        name: "parameters"
    }
]

// Initializing the inquirer prompt
inquirer.prompt(questions)

//Formatting the inquirer responses
.then(function(answers) {
    let generatedInputs = new PasswordCharacters(answers.parameters);
    //console.log(generatedPassword);
});