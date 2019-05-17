
//------------------------------------------------------------------------------------------------------
//                                              Variables
//------------------------------------------------------------------------------------------------------
var wordsToGuess = ["mario","donkeykong","link","samus","yoshi","kirby","fox","pikachu","luigi","ness","ganondorf","villager","peach",                          "zelda","sheik","marth","falco","mewtwo","roy","pit","wario","sonic","wolf","pacman","snake","falcon",];
var charGuess;
var wins = 0;
var guessesLeft = 10;
var charsGuessed = [];


//Background music
var audio = new Audio("../sounds/charselect.mp3");
audio.play;

//Variables that need loops
var word2Guess= wordsToGuess[Math.floor(Math.random()*wordsToGuess.length)];
var word2GuessArray = [];
for(var i = 0; i < word2Guess.length; i++){
    word2GuessArray.push(word2Guess[i]);
 
}
var displayedWord="_".repeat(word2Guess.length);
var displayedWordArray =[];
for(var i = 0; i<displayedWord.length; i++){
    displayedWordArray.push(displayedWord[i]);
    
}



//Setting up the Display
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



    //SHOULD WRITE A RESETTING FUNCTION
    //Winning the game
    if (!(displayedWordArray.includes("_"))){
        //Somehow reset game and increment wins
        wins++
        guessesLeft = 10;
        charsGuessed=[];
        word2Guess= wordsToGuess[Math.floor(Math.random()*wordsToGuess.length)];
        word2GuessArray = [];
        for(var i = 0; i < word2Guess.length; i++){
            word2GuessArray.push(word2Guess[i]);
        }
        displayedWord="_".repeat(word2Guess.length);
        displayedWordArray =[];
        for(var i = 0; i<displayedWord.length; i++){
            displayedWordArray.push(displayedWord[i]);
        }
    }



    //Losing the game
    if (guessesLeft === 0){
        //Reset game
        guessesLeft = 10;
        charsGuessed=[];
        word2Guess= wordsToGuess[Math.floor(Math.random()*wordsToGuess.length)];
        word2GuessArray = [];
        for(var i = 0; i < word2Guess.length; i++){
            word2GuessArray.push(word2Guess[i]);
        }
        displayedWord="_".repeat(word2Guess.length);
        displayedWordArray =[];
        for(var i = 0; i<displayedWord.length; i++){
            displayedWordArray.push(displayedWord[i]);
        }
    }


}

