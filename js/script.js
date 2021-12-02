// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.

let button = document.getElementById(`button`);
let select = document.getElementById(`difficulty`);
let numMin = 1;
let numMax = 100;

//change difficulty
select.addEventListener(`change`, function(){
  start(select, numMax, numMin);
});

button.addEventListener(`click`, function(){
	start(select, numMax, numMin);
})

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
    square.classList.add(`square`);
    
    square.style.height = `calc(100% / ${rowsCells})`;
    square.style.width = `calc(100% / ${rowsCells})`;

    square.addEventListener(`click`, function(){
    	this.style.backgroundColor = `blue`;
    })
    
    square.innerHTML = i;
    container.appendChild(square);
  }
}
