var alpha = ["a","b","c","d","e","f","g","h","i","j","k","l",
"m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wordBank = ["hi", "cake"];
var emptyString = "";
var emptyArr = [];

function gameStart() {
	var randomNum = Math.floor(Math.random() * (2-0) + 0);
	document.getElementById('letters-container').innerHTML;
	for (var i = 0; i < wordBank[randomNum].length; i++){
		document.getElementById('word-container').innerHTML += "-";
	}
}