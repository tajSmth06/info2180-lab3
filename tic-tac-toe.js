document.addEventListener('DOMContentLoaded', function() {
    let squares = document.querySelectorAll('#board div');
    squares.forEach(function(square) {
        square.classList.add('square');
    });
});
let gameState= Array(9).fill(null);
let currentPlayer = 'X';

squares.forEach(function(square, index) {
    square.addEventListener('click', function() {
        gameState[index] = currentPlayer;
        square.textContent = currentPlayer; 
        square.classList.add(currentPlayer);
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    });
});