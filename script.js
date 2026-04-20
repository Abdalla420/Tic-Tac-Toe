const Gameboard = (function() {
    let board = Array(9).fill(null);
    return {
        mark(index, marker) {
            if (board[index] === null){
                board[index] = marker;
                return true;
            }else {
                return false;
            }
        },
        getBoard() {
            return board;
        },
        reset() {
            board = Array(9).fill(null);
        }
    };
})();
// no one pass score as a paramter that why we didn't put it
function player(name, marker) {
    let score = 0;
    return {
        name,
        marker, 
        score,
        reset() {
            this.score = 0;
        },
    };
}

const Controller = (function(){
    const player1 = player("IDK1", "x");
    const player2 = player("IDK2", "o");
    //to randomly choose who to start
    let playerNumber = Math.floor(Math.random() * 2);
    let currentPlayer = (playerNumber === 0)? player1 : player2;
    let gameOver = false;
    return {
        play(index) {
            DisplayController.getBoard();
            if (gameOver === false) {
                // toggling turn 
                if(Gameboard.mark(index, currentPlayer.marker) === true){
                    if(this.checkWin() === false && this.checkDraw() === false){
                        (currentPlayer === player1)? currentPlayer = player2 : currentPlayer = player1;
                    }
                };
            }else {

            }
        },
        checkWin() {
            let boardArray = Gameboard.getBoard();
            const combinations = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]
            ];
            const win = combinations.some(combo =>
                boardArray[combo[0]] === boardArray[combo[1]] &&
                boardArray[combo[1]] === boardArray[combo[2]] &&
                boardArray[combo[0]] !== null
            );
            if (win === true){
                gameOver = true;
                return true;
            }else {
                return false;
            }
        },
        checkDraw() {
            let board = Gameboard.getBoard();
            if(board.includes(null) === false) {
                gameOver = true;
                return true;
            }else {
                return false;
            }
        }
    }
})();

const DisplayController = (function() {
    return {
        displayBoard() {
            const cells = document.querySelectorAll(".cell");
            let displayArray = Gameboard.getBoard();
            cells.forEach((cell, index) => {
                cell.textContent = displayArray[index];
            });
        }
    };
})();


// Controller.play(4);
// Controller.play(0);
// Controller.play(8);
// Controller.play(2);
// Controller.play(6);
// Controller.play(1);
Gameboard.getBoard();
// Controller.play(0);
// Controller.play(0);
// Controller.play(0);
// Controller.play(0);

