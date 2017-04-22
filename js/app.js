document.body.addEventListener('keydown', createLetters)

var alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wordBank = [ "apple", "bee", "bunny", "banana", "bacon", "butterfly", "bear", "cake", "cupcake", "chocolate", "cookie", "camera", "chick", "cat", "dog", "donut", "egg", "flower", "fish", "grapes", "guitar", "hi", "ice cream", "joke", "klutz", "lemon", "mango", "muisc", "nugget", "orange", "ok", "potatoes", "piano", "pineapple", "panda", "pig", "quit", "rainbow", "special", "starberry", "tacos", "turtle", "trumpet", "ukulele", "violin", "watermelon", "xylophone", "yogurt", "zebra"];
var otherWordToGuess = "";
var emptyArr = [];
var wordToGuess = "";

function gameStart() {
	var randomNum = Math.floor(Math.random() * wordBank.length);
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
			document.getElementById('letter-container').innerHTML = alpha.join(" ");
		}
	}
}

function checkForWord(letter) {
	for (var i = 0; i < wordToGuess.length; i++){
		if (wordToGuess[i] === letter) {
			emptyArr[i] = letter;
			document.getElementById('word-container').innerHTML = emptyArr.join(" ");
			document.getElementById('word-container').style.color = 'blue';
		}
	}
}