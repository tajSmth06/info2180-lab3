document.addEventListener('DOMContentLoaded', function() {
    let squares = document.querySelectorAll('#board div');
    const statusDiv = document.getElementById('status');
    const newGameButton = document.querySelector('.btn');
    squares.forEach(function(square) {
        square.classList.add('square');
    });

    let gameState= Array(9).fill(null);
    let currentPlayer = 'X';
    squares.forEach(function(square, index) {
    square.addEventListener('click', function() {
        gameState[index] = currentPlayer;
        square.textContent = currentPlayer; 
        square.classList.add(currentPlayer);
        if(checkWinner()){
            statusDiv.textContent = `Congratulations! ${currentPlayer} is the winner!`;
            statusDiv.classList.add('you-won');
            isGameOver = true;
            return; 

        }
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    });
    square.addEventListener('mouseenter', function() {
        square.classList.add('hover');
    }); 
    square.addEventListener('mouseleave', function() {
        square.classList.remove('hover'); 
    }); 
    }); 
    
    newGameButton.addEventListener('click', function() {
    e.preventDefault();
    gameState = Array(9).fill(null);
    currentPlayer = 'X';
    isGameOver = false;
    statusDiv.textContent = "Move your mouse over a square and click to play an X or an O.";
    statusDiv.classList.remove('you-won');

    squares.forEach(function(square) {
        square.textContent = "";
        square.classList.remove('X', 'O');
    }); 
    });
   
    function checkWinner() {
    const winningCombinations = [
        [0, 1, 2],[3, 4, 5],[6, 7, 8],
        [0, 3, 6],[1, 4, 7],[2, 5, 8],
        [0, 4, 8],[2, 4, 6]
    ];
    return winningCombinations.some(function(combination) {
        let [a, b, c] = combination;
        return gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c];
    }); 
}
});
