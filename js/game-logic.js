let wordList = [];
let word = "";
let attempts = 5;

try {
  fetch("../data/words.json")
    .then((response) => response.json())
    .then((words) => {
      wordList = words;
    });
} catch (error) {}

function getWordList() {
  fetch("../data/words.json")
    .then((response) => response.json())
    .then((words) => {
        wordList = words;
    });
}

function startGame() {}
