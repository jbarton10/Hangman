var wordsToGuess = ["mario","donkeykong","link","samus","darksamus","yoshi","kirby","fox","pikachu","luigi","ness"];
var charGuess;
var word2Guess= wordsToGuess[Math.floor(Math.random()*wordsToGuess.length)];
var charsGuessed = [];
var guessesLeft = 10;

//This should probably not inclued a space, otherwise I would think
//Indexing will be hard later on
var displayedWord="_ ".repeat(word2Guess.length);
console.log(word2Guess);
console.log(displayedWord);




document.onkeyup = function(event){
    charGuess = event.key;
    
    //Makes sure that you cant select the same letter char twice
    if(!charsGuessed.includes(charGuess)){
        //Increments the guesses
        charsGuessed.push(charGuess); 
        guessesLeft--;
        
        //checks to see if you got it right
        if(word2Guess.includes(charGuess)){
            //Looking for the correct char in the str
            for(var i = 0; i< word2Guess.length; i++){
                //checks the char vs index
                if(charGuess === word2Guess[i]){
                    //Index into displayedWord to change it
                    displayedWord[i]=charGuess;
                    
                }
            }
        guessesLeft--;

        }

    }
}