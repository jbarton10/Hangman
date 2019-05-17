

var wordsToGuess = ["mario","donkeykong","link","samus","darksamus","yoshi","kirby","fox","pikachu","luigi","ness"];
var charGuess;

//MAKE THIS AN ARRAY
var word2Guess= wordsToGuess[Math.floor(Math.random()*wordsToGuess.length)];
var word2GuessArray = [];
for(var i = 0; i < word2Guess.length; i++){
    word2GuessArray.push(word2Guess[i]);
 
}
var charsGuessed = [];
var guessesLeft = 10;
var wins = 0;

//This should probably not inclued a space, otherwise I would think
//Indexing will be hard later on
var displayedWord="_".repeat(word2Guess.length);
var displayedWordArray =[];
for(var i = 0; i<displayedWord.length; i++){
    displayedWordArray.push(displayedWord[i]);
    
}




document.querySelector("#wins").textContent = "Wins: " + wins;
document.querySelector("#currentWord").textContent = "Current word: " + displayedWordArray.join(" ");
document.querySelector("#guessesRemaining").textContent = "Number of guesses remaining: " + guessesLeft;
document.querySelector("#guessedLetters").textContent = "Letters already guessed: " +charsGuessed;


document.onkeyup = function(event){
    charGuess = event.key;
    console.log(charGuess);
    
    
    //Makes sure that you cant select the same letter char twice
    if(!charsGuessed.includes(charGuess)){
        //Increments the guesses
        charsGuessed.push(charGuess); 
        guessesLeft--;
        
        //checks to see if you got it right
        if(word2GuessArray.includes(charGuess)){
            //Looking for the correct char in the str
            for(var i = 0; i< word2GuessArray.length; i++){
                //checks the char vs index
                console.log(displayedWordArray[i*2]);

                if(charGuess === word2GuessArray[i]){
                        displayedWordArray[i]=word2GuessArray[i];
                
                        
                }
            }
        }
    }


    document.querySelector("#wins").textContent = "Wins: " + wins;
    document.querySelector("#currentWord").textContent = "Current word: " + displayedWordArray.join(" ");
    document.querySelector("#guessesRemaining").textContent = "Number of guesses remaining: " + guessesLeft;
    document.querySelector("#guessedLetters").textContent = "Letters already guessed: \n" +charsGuessed;

    if (!displayedWordArray.includes("_")){
        console.log("we really here")
        wins++
        var word2Guess= wordsToGuess[Math.floor(Math.random()*wordsToGuess.length)];
    }

}