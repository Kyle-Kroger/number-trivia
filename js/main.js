//Example fetch using pokemonapi.co
document.querySelector("#input-fact").addEventListener("click", getInputed);
document.querySelector("#random-fact").addEventListener("click", getRandom);

function getFetch(url) {
  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      document.querySelector("#fact").textContent = data.text;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

function getInputed() {
  const choice = document.querySelector("input").value;
  const url = `http://numbersapi.com/${choice}?json`;
  getFetch(url);
}

function getRandom() {
  const url = `http://numbersapi.com/random/trivia?json`;
  getFetch(url);
}
