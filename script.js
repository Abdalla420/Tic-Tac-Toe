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