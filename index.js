const inquirer = require("inquirer");

// class to concatenate the character responses
class PasswordCharacters {
    constructor(characters) {
        this.characters = characters;
    };

    get chars() {
        return this.characters.join('');
    };
};

// class to create the password with the selected characters
class Password { 
    constructor(length, inputs) {
        this.length = length;
        this.inputs = inputs;
    };

    get show() {
        return this.createPassword()
    };

    createPassword() {
        let password = "";
        for(let i = 0; i <=this.length -1; i++){
            password = password + this.inputs.charAt(Math.floor(Math.random() * Math.floor(this.inputs.length - 1)));
        }
        return password;
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
            "!@$%&*+-?<>#=:;[]{}",
            "0123456789",
        ],
        name: "parameters"
    }
]

// Initializing the inquirer prompt
inquirer.prompt(questions)

//Formatting the inquirer responses & providing password
.then(function(answers) {
    let generatedInputs = new PasswordCharacters(answers.parameters);
    let generatedPassword = new Password(answers.characters, generatedInputs.chars);
    console.log(`\n` + "Your secure password is: " + generatedPassword.show);
});