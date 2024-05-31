#! usr/bin/env node
import inquirer from "inquirer"

const answer: {
    sentence: string
} = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "enter your sentence to count the word: "
    }
])

const words = answer.sentence.trim().split(" ")
console.log(`your sentence word count is ${words.length}`)