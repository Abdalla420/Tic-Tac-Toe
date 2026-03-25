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
            if(Gameboard.mark(index, currentPlayer.marker) === true){
                (currentPlayer === player1)? currentPlayer = player2 : currentPlayer = player1;
            }

        },
    }
})();