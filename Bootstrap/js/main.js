let explain = document.querySelector(".explain");
let turn = 'x';
let squares = [];


function game(id) {
    let element = document.getElementById(id);
    if( turn === 'x' && element.innerHTML == '' ) {
        element.innerHTML = 'x';
        turn = 'o';
        explain.innerHTML = 'O';
    }else if( turn === 'o' && element.innerHTML == '') {
        element.innerHTML = 'o';
        turn = 'x';
        explain.innerHTML = 'X';
    }
    winner();
}

function endGame( num1 , num2 , num3 ) {
    explain.innerHTML = `${squares[num1].toUpperCase()} Winner`;
    document.getElementById('item' + num1).style.background = '#555';
    document.getElementById('item' + num2).style.background = '#555';
    document.getElementById('item' + num3).style.background = '#555';
    document.getElementById("success").play();
    setInterval(function() {explain.innerHTML += '.'}, 1000);
    setTimeout(function() {location.reload()}, 4000);
}

function winner() {
    let draw = true; // Assume it's a draw unless proven otherwise
    for (let i = 1; i <= 9; i++) {
        squares[i] = document.getElementById(`item${i}`).innerHTML;
    }
    // Check for a winner
    if (squares[1] !== '' && squares[1] === squares[2] && squares[2] === squares[3]) {
        endGame(1, 2, 3);
        draw = false; // There's a winner, so it's not a draw
    } else if (squares[4] !== '' && squares[4] === squares[5] && squares[5] === squares[6]) {
        endGame(4, 5, 6);
        draw = false;
    } else if (squares[7] !== '' && squares[7] === squares[8] && squares[8] === squares[9]) {
        endGame(7, 8, 9);
        draw = false;
    } else if (squares[1] !== '' && squares[1] === squares[4] && squares[4] === squares[7]) {
        endGame(1, 4, 7);
        draw = false;
    } else if (squares[2] !== '' && squares[2] === squares[5] && squares[5] === squares[8]) {
        endGame(2, 5, 8);
        draw = false;
    } else if (squares[3] !== '' && squares[3] === squares[6] && squares[6] === squares[9]) {
        endGame(3, 6, 9);
        draw = false;
    } else if (squares[1] !== '' && squares[1] === squares[5] && squares[5] === squares[9]) {
        endGame(1, 5, 9);
        draw = false;
    } else if (squares[3] !== '' && squares[3] === squares[5] && squares[5] === squares[7]) {
        endGame(3, 5, 7);
        draw = false;
    }
    // Check for a draw
    if (draw) {
        let allFilled = squares.slice(1).every(square => square !== ''); // Check if all squares are filled
        if (allFilled) {
            gameOver();
            explain.innerHTML = 'Play Again';
        }
    }
}


// Game Over Function
function gameOver(){
    // Create The Next Button
    let p = document.createElement("p");
    // Create Text
    let pText = document.createTextNode(`Again`);
    // Append Text To The Div
    p.appendChild(pText);
    // Add Class To The Div
    p.className = "again";
    // Append The Div To The Body
    document.body.appendChild(p);
}

//  Next Level Step
document.addEventListener("click", (n) => {
    if (n.target.className.includes("again")) {
        location.reload();
    }
});