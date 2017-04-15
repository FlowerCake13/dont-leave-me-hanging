document.body.addEventListener('keydown', createLetters)

var alpha = ["a","b","c","d","e","f","g","h","i","j","k","l",
"m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wordBank = ["hi", "cake"];
var emptyString = "";
var emptyArr = [];
var wordToGuess = "";

function gameStart() {
	var randomNum = Math.floor(Math.random() * (2-0) + 0);
	document.getElementById('letter-container').innerHTML = alpha;
	wordToGuess = wordBank[randomNum];
	for (var i = 0; i < wordBank[randomNum].length; i++){
		document.getElementById('word-container').innerHTML += "-";
	}
	emptyArr.push(document.getElementById('word-container').innerHTML);
	console.log(emptyArr);
}

gameStart();

function createLetters(e) {
	console.log(e);
	var index = 0;
	for (var i = 0; i < alpha.length; i++) {
		if (alpha[i] === e.key) {
			console.log("They dont match.. LOL")
			checkForWord(alpha[i]);
			document.getElementById('guesses-container').innerHTML += alpha[i];
			index = i;
			alpha.splice(index, 1);
			document.getElementById('letter-container').innerHTML = alpha;
		}
	}
}

function checkForWord(letter) {
	for (var i = 0; i < wordToGuess.length; i++){
		if (letter === wordToGuess[i]) {
			emptyArr = letter;
			document.getElementById('word-container').innerHTML = emptyArr;
		}
	}
}