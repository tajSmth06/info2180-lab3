document.addEventListener('DOMContentLoaded', function() {
    let squares = document.querySelectorAll('#board div');
    squares.forEach(function(square) {
        square.classList.add('square');
    });
});