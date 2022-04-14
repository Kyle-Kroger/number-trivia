//Example fetch using pokemonapi.co
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const choice = document.querySelector("input").value;
  const url = `http://numbersapi.com/${choice}?json`;

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
