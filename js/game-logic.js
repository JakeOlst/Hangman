const fs = require('fs').promises;
const path = require('path');

let wordList, wordLetters, lettersGuessed, guessWord = [];
let word = "";
let attempts = 5;

async function getWordList() {
    try {
        const filePath = path.resolve(__dirname, '../data/words.json');
        const fileContents = await fs.readFile(filePath, 'utf8');
        return JSON.parse(fileContents);
    } catch (error) {
        console.error("Failed to load word list:", error);
        throw error;
    }
}

async function getRandomWord() {
    word = wordList[Math.floor(Math.random() * wordList.length)];
    wordLetters = word.split('');
    guessWord  = Array(word.length).fill('_');
    return word;
}

async function configureGame() {
    let attempts = 5;
}

async function startGame() {
    try {
        wordList = await getWordList();
        word = await getRandomWord();
        console.log("Word List:", wordList);
        console.log("Random Word:", word);
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

function checkLetter(letter) {
    if (wordLetters.contains(letter)) {
        for (let i = 0; i < wordLetters.length; i++) {
            if (wordLetters[i] === letter) {
                guessWord[i] = letter;
            }
        }
    } else {
        console.log("Word does not include the letter '"+letter+"'");
    }
}

async function makeGuess(letter) {
    if (!lettersGuessed.contains(letter)) {
        checkLetter()
    }
}

try {
    configureGame();
    startGame();
} catch (error) {

}