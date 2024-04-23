const randomCat = "https://api.thecatapi.com/v1/images/search?limit=10";
const randomJoke = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,racist,sexist&type=single";

console.log("test ");
//weird way to get around using .then clauses
(async () => {
  const response = await fetch(randomCat);
  const data = await response.json();

  let jokeFetcher = async () => {
    const jokeResponse = await fetch(randomJoke);
    const jokeData = await jokeResponse.json();
    return jokeData

  }
 

  let i = 0;
  //using array of image objects
  //retrieve the first image object by using index i % data.length
  document.getElementById("cat").src = data[0].url;
  let b1 = document.createElement("button");
  b1.innerHTML = "Not feeling it...";
  b1.id = "catButton";
  document.getElementById("catContainer").appendChild(b1);

  let jokeText = document.createElement("p");
  let theJoke = (await jokeFetcher()).joke

  jokeText.textContent = theJoke;
  jokeText.id = "jokeText"
  document.getElementById("jokeContainer").appendChild(jokeText);

  b1.onclick = async function () {
    document.getElementById("cat").src = data[++i % data.length].url;
    theJoke = (await jokeFetcher()).joke
    document.getElementById("jokeText").textContent = theJoke;
  };
})();
