//Global Constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [5, 2, 6, 4, 3, 1, 2, 4];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.2;  //must be between 0.0 and 1.0
var guessCounter = 0;
var mistakes = 0;


var clueHoldTime = 1000; //how long to hold each clue's light/sound

function startGame(){
  //initialize game variables
  clueHoldTime = 1000;
  progress = 0;
  mistakes = 0;
  gamePlaying = true;
  
  createRandomPattern();
  document.getElementById("mistakes").innerHTML = mistakes;

  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
  
}

function stopGame(){
  gamePlaying = false;
  
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function winGame(){
  stopGame();
  alert("Game Over. You win.");
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  clueHoldTime -= 75;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}


function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }

  //Guess is correct (YES)
  if(btn == pattern[guessCounter]){
    //Is the turn over?
    //If it is not over (NO)
    if(guessCounter != progress){
        guessCounter++;
    }
    //If it IS over (YES)
    else{
          //Is it the last turn? (YES)
          if(guessCounter == pattern.length - 1){
            winGame();
          }
          //That means it's not over. (NO)
          else{
            progress++;
            playClueSequence();
          }
    }
  }
  
  //Guess is incorrect (NO)
  else{
    mistakes++;
    document.getElementById("mistakes").innerHTML = mistakes;
    if(mistakes == 3){
      loseGame();
    }
    console.log(mistakes);
  } 
}



function createRandomPattern(){
  for(var i = 0; i < 8; i++){
    pattern[i] = Math.floor(Math.random() * 6) + 1;
  }
}





// Sound Synthesis Functions
const freqMap = {
  1: 200,
  2: 250,
  3: 300,
  4: 350,
  5: 400,
  6: 450
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)