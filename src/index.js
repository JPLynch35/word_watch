import $ from 'jquery'

$(document).ready(() => {
  getTopWord();
  $(`#submit-btn`).click(sendWords);
});

const getTopWord = () => {
  fetch(`https://wordwatch-api.herokuapp.com/api/v1/top_word`)
    .then(response => response.json())
    .then(topWord => displayWord(topWord))
    .catch(error => console.error({error}))
};

const displayWord = (word) => {
  $(`.word-count`).html(`${Object.keys(word.word)}: ${Object.values(word.word)}`)
};

const sendWords = () => {
  const text = $(`#text-area`).val();
  refreshTextAreas();
  text.split(" ").forEach(word => {
    fetch(`https://wordwatch-api.herokuapp.com/api/v1/words`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(
        { word: { value: `${word}` } }
      )
    })
  });
  getTopWord()
};

const refreshTextAreas = () => {
  $(`#text-area`).val('')
};
