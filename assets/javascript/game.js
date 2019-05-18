
//------------------------------------------------------------------------------------------------------
//                                              Variables
//------------------------------------------------------------------------------------------------------
var wordsToGuess = ["mario","donkeykong","link","samus","yoshi","kirby","fox","pikachu","luigi","ness","ganondorf","villager","peach",      
                    "zelda","shiek","marth","falco","mewtwo","roy","pit","wario","sonic","wolf","pacman","snake","falcon",];

// var charImages = [];
// charImages[0] = new Image();
// charImages[0].src = "../images/characters/mario.jpg";

// charImages[1] = new Image();
// charImages[1].src = "../images/characters/Donkeykong.jpg";

// charImages[2] = new Image();
// charImages[2].src = "../images/characters/Link.jpg";

// charImages[3] = new Image();
// charImages[3].src = "../images/characters/Samus.png";

// charImages[4] = new Image();
// charImages[4].src = "../images/characters/Yoshi.png";

// charImages[5] = new Image();
// charImages[5].src = "../images/characters/Kirby.jpg";

// charImages[6] = new Image();
// charImages[6].src = "../images/characters/Fox.png";

// charImages[7] = new Image();
// charImages[7].src = "../images/characters/pikachu.png";

// charImages[8] = new Image();
// charImages[8].src = "../images/characters/Luigi.png";

// charImages[9] = new Image();
// charImages[9].src = "../images/characters/ness.png";

// charImages[10] = new Image();
// charImages[10].src = "../images/characters/Ganondorf.png";

// charImages[11] = new Image();
// charImages[11].src = "../images/characters/Villager.png";

// charImages[12] = new Image();
// charImages[12].src = "../images/characters/Peach.png";

// charImages[13] = new Image();
// charImages[13].src = "../images/characters/Zelda.png";

// charImages[14] = new Image();
// charImages[14].src = "../images/characters/Shiek.png";

// charImages[15] = new Image();
// charImages[15].src = "../images/characters/Marth.png";

// charImages[16] = new Image();
// charImages[16].src = "../images/characters/Falco.png";

// charImages[17] = new Image();
// charImages[17].src = "../images/characters/Mewtwo.png";

// charImages[18] = new Image();
// charImages[18].src = "../images/characters/Roy.png";

// charImages[19] = new Image();
// charImages[19].src = "../images/characters/Pit.png";

// charImages[20] = new Image();
// charImages[20].src = "../images/characters/Wario.png";

// charImages[21] = new Image();
// charImages[21].src = "../images/characters/Sonic.png";

// charImages[22] = new Image();
// charImages[22].src = "../images/characters/Wolf.png";

// charImages[23] = new Image();
// charImages[23].src = "../images/characters/Pacman.png";

// charImages[24] = new Image();
// charImages[24].src = "../images/characters/Snake.png";

// charImages[25] = new Image();
// charImages[25].src = "../images/characters/Falcon.png";


var charGuess;
var wins = 0;
var guessesLeft = 10;
var charsGuessed = [];


//Audio
var music = new Audio('./assets/sounds/charselect.mp3');



var winner = new Audio("./assets/sounds/VICTORY.wav");

var lose = new Audio("./assets/sounds/NOCONTEST.wav");



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

//Need to think of a way to get the correct image out of here
function showImage(){
    


}



//Setting up the Display
document.querySelector("#wins").textContent = "Wins: " + wins;
document.querySelector("#currentWord").textContent = "Current word: " + displayedWordArray.join(" ");
document.querySelector("#guessesRemaining").textContent = "Number of guesses remaining: " + guessesLeft;
document.querySelector("#guessedLetters").textContent = "Letters already guessed: " +charsGuessed;


document.onkeyup = function(event){
    music.play();
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
        showImage();
        winner.play();
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
        lose.play()
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

