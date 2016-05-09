function getInputValue() {
	var inputBox = document.getElementById("inputBox");
	return inputBox.value;
}
function tweet() {
	var inputBoxValue = getInputValue();
	if (inputBoxValue !== "") {
		doTweet(inputBoxValue);
		clean();
	}
}

function doTweet(tweetText) {
	var tweets = document.getElementById("tweets");

	//Crear el elemento
	var elemento = document.createElement("div");
	elemento.className = "tweet";
	elemento.innerHTML = tweetText;

	//Agregar elementos a tweets
	tweets.appendChild(elemento);

	var ex = tweets.lastChild;
	alert(ex.innerHTML);
}

function clean() {
	var inputBox = document.getElementById("inputBox");
	inputBox.value = "";
	inputBox.focus();
}