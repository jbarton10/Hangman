var wordsToGuess = ["mario","donkeykong","link","samus","darksamus","yoshi","kirby","fox","pikachu","luigi","ness"];
var charGuess;
var word2Guess= wordsToGuess[Math.floor(Math.random()*wordsToGuess.length)];
var charGuessed = [];




document.onkeyup = function(event){
    charGuess = event.key;
    console.log(charGuess);

}