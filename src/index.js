import $ from 'jquery'

$(document).ready(() => {
  getTopWord()
});

$(`#button`).click(sendWords($(`#text-area`)).innerHTML);

const getTopWord = () => {
  fetch(`https://wordwatch-api.herokuapp.com/api/v1/top_word`)
    .then(response => response.json())
    .then(topWord => displayWord(topWord))
    .catch(error => console.error({error}))
};

const displayWord = (word) => {
  $(`.word-count`).html(`${Object.keys(word.word)}: ${Object.values(word.word)}`)
};

const sendWords = (text) => {
  debugger;
};

const seperateWords = (text) => {
};