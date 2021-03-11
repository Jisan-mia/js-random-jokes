const jokesDiv = document.querySelector(".jokesDiv");
const generatorBtn = document.querySelector(".jokesGeneratorBtn");

const url = "https://icanhazdadjoke.com/";

async function generateJokes() {
	const response = await fetch(url, {
		headers: {
			Accept: "application/json",
		},
	});
	const joke = await response.json();

	jokesDiv.innerHTML = joke.joke;
}
generateJokes();

setInterval(() => {
	generateJokes();
}, 10000);

generatorBtn.addEventListener("click", generateJokes);
