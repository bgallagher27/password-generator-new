const inquirer = require("inquirer");

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
            ("Uppercase Letters", "ABCDEFGHIJKLMNOPQRSTUVWXYZ"),
            ("Lowercase Letters", "abcdefghijklmnopqrstuvwxyz"),
            ("Special Characters", "!@$%&*"),
            ("Numbers", "0123456789"),
        ],
        name: "parameters"
    }
]