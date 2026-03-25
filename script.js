function Gameboard(){
    const rows = 3;
    const columns = 3;
    let board = [];

    for(let i = 0; i < rows; i++){
        board[i] = [];
        for(let j = 0; j < columns; j++){
            board[i][j] = Cell();
        }
    }
    const getBoard = () => board;

    const drawSymbol(row, column, player){

    }
}


function Cell(){
    let value = 0;

    const addSymbol = (player) => {
        value = player;
    }

    const getValue = () => value;
    return {
        addSymbol,
        getValue
    }
}