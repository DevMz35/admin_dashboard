const display = document.querySelector('.result-game')
const game = document.querySelectorAll('.game');
const btn = document.querySelector('#btn');

let gameAtive = true;

let currentPlayer = 'X';

let gameStart = [];

const winnPlayer = () =>{
    `The player ${currentPlayer} has won!`
}

const drowGameMessage = () =>{
    `Game anded drow!`
}

const currentPlayerIn = () => {
   `Its ${currentPlayer}'s turn!`
}

display.textContent = currentPlayerIn();

const gamePlayed =()=>{

}

const gameChangePlayed = () =>{

}

const gameValidation = () =>{

}

const gameClick = () =>{

}

const gameIsStart = () =>{

}

for(let i =0; i < game.length; i++){
    console.log(game[0])
}