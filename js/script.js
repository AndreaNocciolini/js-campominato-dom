// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.

//Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
//I numeri nella lista delle bombe non possono essere duplicati.
//In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
//La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti. Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha cliccato su una cella che non era una bomba.


let button = document.getElementById(`button`);
let select = document.getElementById(`difficulty`);
let numMin = 1;
let numMax = 100;


select.addEventListener(`change`, function(){
  start(select, numMax, numMin);
});

button.addEventListener(`click`, function(){
	start(select, numMax, numMin);
})

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function start(selectDiff, maxNum, minNum){
	let container = document.querySelector(`.container`);
  let rowsCells;
	let difficulty = selectDiff.value;
  container.innerHTML = ``;
  console.log(difficulty);
  
  if(difficulty == 1){
  numCells = 100;
  rowsCells = 10;
  }
  else if (difficulty == 2){
  numCells = 81;
  rowsCells = 9;
  }
  else if (difficulty == 3){
  numCells = 49;
  rowsCells = 7;
  }
  
  for(let i = minNum; i <= numCells; i++){
  	let square = document.createElement(`div`);
    let numRand = getRndInteger(i, numCells);
    square.classList.add(`square`);
    
    square.style.height = `calc(100% / ${rowsCells})`;
    square.style.width = `calc(100% / ${rowsCells})`;

    square.addEventListener(`click`, function(){
    	if(i !== numRand){
      	this.style.backgroundColor = `blue`;
      }
    	else if (i == numRand){
      	this.style.backgroundColor = `red`;
      }
    })
    
    square.innerHTML = i;
    container.appendChild(square);
  }
}
