/*
 * Title: Tic Tac Toe
 * Version: 1.0
 * Written by: Michelle Cantin
 *
 * Notes:
 *      User is X
 *      User starts
 *
 * Map:
 *      Global variables
 *      Add pointer to each square
 *      function removePointer(i)
 *      Square event listeners
 *      Level event listeners
 *      function setLevel(l)
 *      function alertsStop()
 *      function userPlays(i)
 *      function checkForWinner(i)
 *      function computerPlays()
 *      function clear()
 *
*/

/*
 * Global variables
 *
*/
var winner = "none";
var level = "none";
var square = document.getElementsByTagName("td");

/*
 * Add pointer to each square
*/
for (i = 0; i < 9; i++) {
    if (square[i].innerHTML == "") {
        square[i].classList.add('pointer');
    }
}

/*
 * Function: Remove pointer
 *
*/
function removePointer(i) {
    square[i].classList.remove("pointer");
}

/*
 * Square event listeners
*/
square[0].addEventListener("click", function() {
    userPlays(0);
});
square[1].addEventListener("click", function() {
    userPlays(1);
});
square[2].addEventListener("click", function() {
    userPlays(2);
});
square[3].addEventListener("click", function() {
    userPlays(3);
});
square[4].addEventListener("click", function() {
    userPlays(4);
});
square[5].addEventListener("click", function() {
    userPlays(5);
});
square[6].addEventListener("click", function() {
    userPlays(6);
});
square[7].addEventListener("click", function() {
    userPlays(7);
});
square[8].addEventListener("click", function() {
    userPlays(8);
});

/*
 * Level event listeners
 *
*/
var easy = document.getElementById("easy");
easy.addEventListener("click", function() {
    setLevel("easy");
});
var normal = document.getElementById("normal")
normal.addEventListener("click", function() {
    setLevel("normal");
});
var hard = document.getElementById("hard");
hard.addEventListener("click", function() {
    setLevel("hard");
});

/*
 * Function: Set level
 * 
 * Used by: Level event listeners
 *
 * If:  The level isin't set or
 *      There is a winner or
 *      The user hasn't started playing:
 *          The level variable is set to the level chosen
 *          The class "level" is added to the button to highlight it
 * If, else if and else: Highlight is removed on buttons if the level is not set to it
 * If: There is a winner, clear the game
 *
*/
function setLevel(l) {
    if ((level == "none") || (winner != "none") || (square[0].innerHTML == "" && square[1].innerHTML == "" && square[2].innerHTML == "" && square[3].innerHTML == "" && square[4].innerHTML == "" && square[5].innerHTML == "" && square[6].innerHTML == "" && square[7].innerHTML == "" && square[8].innerHTML == "")) {
        window.level = l;
        document.getElementById(l).classList.add('level');
        if (l == "easy") {
            normal.classList.remove("level");
            hard.classList.remove("level");
        } else if (l == "normal"){
            easy.classList.remove("level");
            hard.classList.remove("level");
        } else {
            easy.classList.remove("level");
            normal.classList.remove("level");
        }
        if (winner != "none") {
            clear();
        }
    }
}

/*
 * Function: Alerts stop
 *
 * When someone wins or there is a tie, each square that was not played is now equal to " "
 *
*/
function alertsStop(){
    for (i = 0; i <= 8; i++) {
        if (square[i].innerHTML != "X" && square[i].innerHTML != "O") {
            square[i].innerHTML = " ";
            removePointer(i);
        }
    }
}

/*
 * Function: User plays
 *
 * If: The level hasn't been set
 * Else if: The game is already over
 * Else if: The clicked square is empty, add X and call the checkForWinner function
 * Else: It is not empty. Alert the user and break the function to allow user to choose another square.
*/
function userPlays(i) {
    if (level == "none"){
        alert("Please set a level before playing!");
    } else if (square[0].innerHTML != "" && square[1].innerHTML != "" && square[2].innerHTML != "" && square[3].innerHTML != "" && square[4].innerHTML != "" && square[5].innerHTML != "" && square[6].innerHTML != "" && square[7].innerHTML != "" && square[8].innerHTML != "" ) {
        alert("The game is already over!");
    } else if (square[i].innerHTML != "X" && square[i].innerHTML != "O") {
        square[i].innerHTML = "X";
        checkForWinner(i);
    } else {
        alert("This square has already been played!");
        return;
    }
}

/*
 * Function: checkForWinner
 *
 * removePointer(i) for the square that was filled
 * If: The user has a winning combination, alert and ask to play again.
 * Else if: The computer has a winning combination, alert and ask to play again.
 * Else if: all the boxes are filled, alert for tie and ask to play again.
 * Else: Determines who plays next.
*/
function checkForWinner(i) {
    removePointer(i);
    // User wins
    if ((square[0].innerHTML == "X" && square[1].innerHTML == "X" && square[2].innerHTML == "X") ||
        (square[2].innerHTML == "X" && square[5].innerHTML == "X" && square[8].innerHTML == "X") ||
        (square[6].innerHTML == "X" && square[7].innerHTML == "X" && square[8].innerHTML == "X") ||
        (square[0].innerHTML == "X" && square[3].innerHTML == "X" && square[6].innerHTML == "X") ||
        (square[2].innerHTML == "X" && square[4].innerHTML == "X" && square[6].innerHTML == "X") ||
        (square[0].innerHTML == "X" && square[4].innerHTML == "X" && square[8].innerHTML == "X") ||
        (square[3].innerHTML == "X" && square[4].innerHTML == "X" && square[5].innerHTML == "X") ||
        (square[1].innerHTML == "X" && square[4].innerHTML == "X" && square[7].innerHTML == "X")) {
        if (square[0].innerHTML == "X" && square[1].innerHTML == "X" && square[2].innerHTML == "X") {
            square[0].className = " winner";
            square[1].className = " winner";
            square[2].className = " winner";
        } else if (square[2].innerHTML == "X" && square[5].innerHTML == "X" && square[8].innerHTML == "X") {
            square[2].className = " winner";
            square[5].className = " winner";
            square[8].className = " winner";
        } else if (square[6].innerHTML == "X" && square[7].innerHTML == "X" && square[8].innerHTML == "X") {
            square[6].className = " winner";
            square[7].className = " winner";
            square[8].className = " winner";
        } else if (square[0].innerHTML == "X" && square[3].innerHTML == "X" && square[6].innerHTML == "X") {
            square[0].className = " winner";
            square[3].className = " winner";
            square[6].className = " winner";
        } else if (square[2].innerHTML == "X" && square[4].innerHTML == "X" && square[6].innerHTML == "X") {
            square[2].className = " winner";
            square[4].className = " winner";
            square[6].className = " winner";
        } else if (square[0].innerHTML == "X" && square[4].innerHTML == "X" && square[8].innerHTML == "X") {
            square[0].className = " winner";
            square[4].className = " winner";
            square[8].className = " winner";
        } else if (square[3].innerHTML == "X" && square[4].innerHTML == "X" && square[5].innerHTML == "X") {
            square[3].className = " winner";
            square[4].className = " winner";
            square[5].className = " winner";
        } else if (square[1].innerHTML == "X" && square[4].innerHTML == "X" && square[7].innerHTML == "X") {
            square[1].className = " winner";
            square[4].className = " winner";
            square[7].className = " winner";
        }
        var gameAlert = confirm("You won! Play again?");
        if (gameAlert == null || gameAlert == "") {
            thanks.innerHTML = "Thank you for the play!";
            alertsStop();
            window.winner = "user";
        } else {
            clear();
        }
    // Computer wins
    } else if ((square[0].innerHTML == "O" && square[1].innerHTML == "O" && square[2].innerHTML == "O") ||
        (square[2].innerHTML == "O" && square[5].innerHTML == "O" && square[8].innerHTML == "O") ||
        (square[6].innerHTML == "O" && square[7].innerHTML == "O" && square[8].innerHTML == "O") ||
        (square[0].innerHTML == "O" && square[3].innerHTML == "O" && square[6].innerHTML == "O") ||
        (square[2].innerHTML == "O" && square[4].innerHTML == "O" && square[6].innerHTML == "O") ||
        (square[0].innerHTML == "O" && square[4].innerHTML == "O" && square[8].innerHTML == "O") ||
        (square[3].innerHTML == "O" && square[4].innerHTML == "O" && square[5].innerHTML == "O") ||
        (square[1].innerHTML == "O" && square[4].innerHTML == "O" && square[7].innerHTML == "O")) {
        if (square[0].innerHTML == "O" && square[1].innerHTML == "O" && square[2].innerHTML == "O") {
            square[0].className = " winner";
            square[1].className = " winner";
            square[2].className = " winner";
        } else if (square[2].innerHTML == "O" && square[5].innerHTML == "O" && square[8].innerHTML == "O") {
            square[2].className = " winner";
            square[5].className = " winner";
            square[8].className = " winner";
        } else if (square[6].innerHTML == "O" && square[7].innerHTML == "O" && square[8].innerHTML == "O") {
            square[6].className = " winner";
            square[7].className = " winner";
            square[8].className = " winner";
        } else if (square[0].innerHTML == "O" && square[3].innerHTML == "O" && square[6].innerHTML == "O") {
            square[0].className = " winner";
            square[3].className = " winner";
            square[6].className = " winner";
        } else if (square[2].innerHTML == "O" && square[4].innerHTML == "O" && square[6].innerHTML == "O") {
            square[2].className = " winner";
            square[4].className = " winner";
            square[6].className = " winner";
        } else if (square[0].innerHTML == "O" && square[4].innerHTML == "O" && square[8].innerHTML == "O") {
            square[0].className = " winner";
            square[4].className = " winner";
            square[8].className = " winner";
        } else if (square[3].innerHTML == "O" && square[4].innerHTML == "O" && square[5].innerHTML == "O") {
            square[3].className = " winner";
            square[4].className = " winner";
            square[5].className = " winner";
        } else if (square[1].innerHTML == "O" && square[4].innerHTML == "O" && square[7].innerHTML == "O") {
            square[1].className = " winner";
            square[4].className = " winner";
            square[7].className = " winner";
        }
        var gameAlert = confirm("The computer won! Play again?");
        if (gameAlert == null || gameAlert == "") {
            thanks.innerHTML = "Thank you for the play!";
            alertsStop();
            window.winner = "computer";
        } else {
            clear();
        }
    // Tie
    } else if ((square[0].innerHTML == "X" || square[0].innerHTML == "O") &&
        (square[1].innerHTML == "X" || square[1].innerHTML == "O") &&
        (square[2].innerHTML == "X" || square[2].innerHTML == "O") &&
        (square[3].innerHTML == "X" || square[3].innerHTML == "O") &&
        (square[4].innerHTML == "X" || square[4].innerHTML == "O") &&
        (square[5].innerHTML == "X" || square[5].innerHTML == "O") &&
        (square[6].innerHTML == "X" || square[6].innerHTML == "O") &&
        (square[7].innerHTML == "X" || square[7].innerHTML == "O") &&
        (square[8].innerHTML == "X" || square[8].innerHTML == "O")) {
        
        var gameAlert = confirm("It's a tie! Play again?");
        if (gameAlert == null || gameAlert == "") {
            document.getElementById("thanks").innerHTML = "Thank you for the play!";
            alertsStop();
            window.winner = "tie";
        } else {
            clear();
        }
    } else {
        var O = [];
        var X = [];
        for (i = 0; i < 9; i++) {
            if (square[i].innerHTML == "O") {
                O.push(square[i]);
            } else if (square[i].innerHTML == "X") {
                X.push(square[i]);
            }
        }
        if (O.length == X.length) {
            return;
        } else {
            computerPlays();
        }
    }
}

/*
 * Function: computerPlays
 * 
 * If: The user played in the middle, the computer adds O to a corner
 * Else if: The computer adds 0 in the middle
 * 2 Else if: The user added "X" on two corners and computer added "O" in the middle, computer adds "O" to middle side
 * First set of if statements (Combination 1 to 8): The computer adds "0" to a line that already has 2.
 * Second set of if statements (Combination 1 to 8): The computer adds "O" to a line that a user already has 2.
 * Third set of if statements (Combination 1 to 8): The computer adds "O" to a line that only has 1.
 * Else: The computer plays for the first time or there is no other option.
 *      iNumber: Generate a random number
 *      If: Random number is empty, call the checkForWinner function.
 *      Else: Redo this function.
*/
function computerPlays() {
    // Hard    
    // The user played in the middle, the computer adds O to a corner    
    if (square[0].innerHTML == "" && square[2].innerHTML == "" && square[6].innerHTML == "" && square[8].innerHTML == "" && square[4].innerHTML == "X"
              && square[1].innerHTML == "" && square[3].innerHTML == "" && square[5].innerHTML == "" && square[7].innerHTML == "" && level == "hard") {
        square[0].innerHTML = "O";
        checkForWinner(i = 0);
    
    // the computer adds O in the middle
    } else if (square[4].innerHTML == "" && level == "hard") {
            square[4].innerHTML = "O";
            checkForWinner(i = 4);
    
    // the user added "X" on two corners and computer added "O" in the middle, computer adds "O" to middle side
    } else if (square[4].innerHTML == "O" && square[2].innerHTML == "X" && square[6].innerHTML == "X" && square[5].innerHTML == "" && 
        square[7].innerHTML == "" && square[1].innerHTML == "" && square[3].innerHTML == "" && square[8].innerHTML == "" && square[0].innerHTML == "" && level == "hard") {
        square[5].innerHTML = "O";
        checkForWinner(i = 5);
    } else if (square[4].innerHTML == "O" && square[2].innerHTML == "" && square[6].innerHTML == "" && square[5].innerHTML == "" && 
        square[7].innerHTML == "" && square[1].innerHTML == "" && square[3].innerHTML == "" && square[8].innerHTML == "X" && square[0].innerHTML == "X" && level == "hard") {
        square[3].innerHTML = "O";
        checkForWinner(i = 3);
    
    // Normal
    // The computer adds "O" to a line that already has 2.
    
    // Combination 1
    } else if ((square[0].innerHTML == "O" && square[1].innerHTML == "O" && square[2].innerHTML == "") && (level == "hard" || level == "normal")) {
        square[2].innerHTML = "O";
        checkForWinner(i = 2);
    } else if ((square[0].innerHTML == "" && square[1].innerHTML == "O" && square[2].innerHTML == "O") && (level == "hard" || level == "normal")) {
        square[0].innerHTML = "O";
        checkForWinner(i = 0);
    } else if ((square[0].innerHTML == "O" && square[1].innerHTML == "" && square[2].innerHTML == "O") && (level == "hard" || level == "normal")) {
        square[1].innerHTML = "O";
        checkForWinner(i = 1);
        
    // Combination 2
    } else if ((square[2].innerHTML == "O" && square[5].innerHTML == "O" && square[8].innerHTML == "") && (level == "hard" || level == "normal")) {
        square[8].innerHTML = "O";
        checkForWinner(i = 8);
    } else if ((square[2].innerHTML == "" && square[5].innerHTML == "O" && square[8].innerHTML == "O") && (level == "hard" || level == "normal")) {
        square[2].innerHTML = "O";
        checkForWinner(i = 2);
    } else if ((square[2].innerHTML == "O" && square[5].innerHTML == "" && square[8].innerHTML == "O") && (level == "hard" || level == "normal")) {
        square[5].innerHTML = "O";
        checkForWinner(i = 5);
        
    // Combination 3
    } else if ((square[6].innerHTML == "O" && square[7].innerHTML == "O" && square[8].innerHTML == "") && (level == "hard" || level == "normal")) {
        square[8].innerHTML = "O";
        checkForWinner(i = 8);
    } else if ((square[6].innerHTML == "" && square[7].innerHTML == "O" && square[8].innerHTML == "O") && (level == "hard" || level == "normal")) {
        square[6].innerHTML = "O";
        checkForWinner(i = 6);
    } else if ((square[6].innerHTML == "O" && square[7].innerHTML == "" && square[8].innerHTML == "O") && (level == "hard" || level == "normal")) {
        square[7].innerHTML = "O";
        checkForWinner(i = 7);
        
    // Combination 4
    } else if ((square[0].innerHTML == "O" && square[3].innerHTML == "O" && square[6].innerHTML == "") && (level == "hard" || level == "normal")) {
        square[6].innerHTML = "O";
        checkForWinner(i = 6);
    } else if ((square[0].innerHTML == "" && square[3].innerHTML == "O" && square[6].innerHTML == "O") && (level == "hard" || level == "normal")) {
        square[0].innerHTML = "O";
        checkForWinner(i = 0);
    } else if ((square[0].innerHTML == "O" && square[3].innerHTML == "" && square[6].innerHTML == "O") && (level == "hard" || level == "normal")) {
        square[3].innerHTML = "O";
        checkForWinner(i = 3);
        
    // Combination 5
    } else if ((square[2].innerHTML == "O" && square[4].innerHTML == "O" && square[6].innerHTML == "") && (level == "hard" || level == "normal")) {
        square[6].innerHTML = "O";
        checkForWinner(i = 6);
    } else if ((square[2].innerHTML == "" && square[4].innerHTML == "O" && square[6].innerHTML == "O") && (level == "hard" || level == "normal")) {
        square[2].innerHTML = "O";
        checkForWinner(i = 2);
    } else if ((square[2].innerHTML == "O" && square[4].innerHTML == "" && square[6].innerHTML == "O") && (level == "hard" || level == "normal")) {
        square[4].innerHTML = "O";
        checkForWinner(i = 4);
        
    // Combination 6
    } else if ((square[0].innerHTML == "O" && square[4].innerHTML == "O" && square[8].innerHTML == "") && (level == "hard" || level == "normal")) {
        square[8].innerHTML = "O";
        checkForWinner(i = 8);
    } else if ((square[0].innerHTML == "" && square[4].innerHTML == "O" && square[8].innerHTML == "O") && (level == "hard" || level == "normal")) {
        square[0].innerHTML = "O";
        checkForWinner(i = 0);
    } else if ((square[0].innerHTML == "O" && square[4].innerHTML == "" && square[8].innerHTML == "O") && (level == "hard" || level == "normal")) {
        square[4].innerHTML = "O";
        checkForWinner(i = 4);
        
    // Combination 7
    } else if ((square[3].innerHTML == "O" && square[4].innerHTML == "O" && square[5].innerHTML == "") && (level == "hard" || level == "normal")) {
        square[5].innerHTML = "O";
        checkForWinner(i = 5);
    } else if ((square[3].innerHTML == "" && square[4].innerHTML == "O" && square[5].innerHTML == "O") && (level == "hard" || level == "normal")) {
        square[3].innerHTML = "O";
        checkForWinner(i = 3);
    } else if ((square[3].innerHTML == "O" && square[4].innerHTML == "" && square[5].innerHTML == "O") && (level == "hard" || level == "normal")) {
        square[4].innerHTML = "O";
        checkForWinner(i = 4);
        
    // Combination 8
    } else if ((square[1].innerHTML == "O" && square[4].innerHTML == "O" && square[7].innerHTML == "") && (level == "hard" || level == "normal")) {
        square[7].innerHTML = "O";
        checkForWinner(i = 7);
    } else if ((square[1].innerHTML == "" && square[4].innerHTML == "O" && square[7].innerHTML == "O") && (level == "hard" || level == "normal")) {
        square[1].innerHTML = "O";
        checkForWinner(i = 1);
    } else if ((square[1].innerHTML == "O" && square[4].innerHTML == "" && square[7].innerHTML == "O") && (level == "hard" || level == "normal")) {
        square[4].innerHTML = "O";
        checkForWinner(i = 4);
        
    // The computer adds "O" to a line that a user already has 2.
        
    // Combination 1
    } else if ((square[0].innerHTML == "X" && square[1].innerHTML == "X" && square[2].innerHTML == "") && (level == "hard" || level == "normal")) {
        square[2].innerHTML = "O";
        checkForWinner(i = 2);
    } else if ((square[0].innerHTML == "" && square[1].innerHTML == "X" && square[2].innerHTML == "X") && (level == "hard" || level == "normal")) {
        square[0].innerHTML = "O";
        checkForWinner(i = 0);
    } else if ((square[0].innerHTML == "X" && square[1].innerHTML == "" && square[2].innerHTML == "X") && (level == "hard" || level == "normal")) {
        square[1].innerHTML = "O";
        checkForWinner(i = 1);
        
    // Combination 2
    } else if ((square[2].innerHTML == "X" && square[5].innerHTML == "X" && square[8].innerHTML == "") && (level == "hard" || level == "normal")) {
        square[8].innerHTML = "O";
        checkForWinner(i = 8);
    } else if ((square[2].innerHTML == "" && square[5].innerHTML == "X" && square[8].innerHTML == "X") && (level == "hard" || level == "normal")) {
        square[2].innerHTML = "O";
        checkForWinner(i = 2);
    } else if ((square[2].innerHTML == "X" && square[5].innerHTML == "" && square[8].innerHTML == "X") && (level == "hard" || level == "normal")) {
        square[5].innerHTML = "O";
        checkForWinner(i = 5);
        
    // Combination 3
    } else if ((square[6].innerHTML == "X" && square[7].innerHTML == "X" && square[8].innerHTML == "") && (level == "hard" || level == "normal")) {
        square[8].innerHTML = "O";
        checkForWinner(i = 8);
    } else if ((square[6].innerHTML == "" && square[7].innerHTML == "X" && square[8].innerHTML == "X") && (level == "hard" || level == "normal")) {
        square[6].innerHTML = "O";
        checkForWinner(i = 6);
    } else if ((square[6].innerHTML == "X" && square[7].innerHTML == "" && square[8].innerHTML == "X") && (level == "hard" || level == "normal")) {
        square[7].innerHTML = "O";
        checkForWinner(i = 7);
        
    // Combination 4
    } else if ((square[0].innerHTML == "X" && square[3].innerHTML == "X" && square[6].innerHTML == "") && (level == "hard" || level == "normal")) {
        square[6].innerHTML = "O";
        checkForWinner(i = 6);
    } else if ((square[0].innerHTML == "" && square[3].innerHTML == "X" && square[6].innerHTML == "X") && (level == "hard" || level == "normal")) {
        square[0].innerHTML = "O";
        checkForWinner(i = 0);
    } else if ((square[0].innerHTML == "X" && square[3].innerHTML == "" && square[6].innerHTML == "X") && (level == "hard" || level == "normal")) {
        square[3].innerHTML = "O";
        checkForWinner(i = 3);
        
    // Combination 5
    } else if ((square[2].innerHTML == "X" && square[4].innerHTML == "X" && square[6].innerHTML == "") && (level == "hard" || level == "normal")) {
        square[6].innerHTML = "O";
        checkForWinner(i = 6);
    } else if ((square[2].innerHTML == "" && square[4].innerHTML == "X" && square[6].innerHTML == "X") && (level == "hard" || level == "normal")) {
        square[2].innerHTML = "O";
        checkForWinner(i = 2);
    } else if ((square[2].innerHTML == "X" && square[4].innerHTML == "" && square[6].innerHTML == "X") && (level == "hard" || level == "normal")) {
        square[4].innerHTML = "O";
        checkForWinner(i = 4);
        
    // Combination 6
    } else if ((square[0].innerHTML == "X" && square[4].innerHTML == "X" && square[8].innerHTML == "") && (level == "hard" || level == "normal")) {
        square[8].innerHTML = "O";
        checkForWinner(i = 8);
    } else if ((square[0].innerHTML == "" && square[4].innerHTML == "X" && square[8].innerHTML == "X") && (level == "hard" || level == "normal")) {
        square[0].innerHTML = "O";
        checkForWinner(i = 0);
    } else if ((square[0].innerHTML == "X" && square[4].innerHTML == "" && square[8].innerHTML == "X") && (level == "hard" || level == "normal")) {
        square[4].innerHTML = "O";
        checkForWinner(i = 4);
        
    // Combination 7
    } else if ((square[3].innerHTML == "X" && square[4].innerHTML == "X" && square[5].innerHTML == "") && (level == "hard" || level == "normal")) {
        square[5].innerHTML = "O";
        checkForWinner(i = 5);
    } else if ((square[3].innerHTML == "" && square[4].innerHTML == "X" && square[5].innerHTML == "X") && (level == "hard" || level == "normal")) {
        square[3].innerHTML = "O";
        checkForWinner(i = 3);
    } else if ((square[3].innerHTML == "X" && square[4].innerHTML == "" && square[5].innerHTML == "X") && (level == "hard" || level == "normal")) {
        square[4].innerHTML = "O";
        checkForWinner(i = 4);
        
    // Combination 8
    } else if ((square[1].innerHTML == "X" && square[4].innerHTML == "X" && square[7].innerHTML == "") && (level == "hard" || level == "normal")) {
        square[7].innerHTML = "O";
        checkForWinner(i = 7);
    } else if ((square[1].innerHTML == "" && square[4].innerHTML == "X" && square[7].innerHTML == "X") && (level == "hard" || level == "normal")) {
        square[1].innerHTML = "O";
        checkForWinner(i = 1);
    } else if ((square[1].innerHTML == "X" && square[4].innerHTML == "" && square[7].innerHTML == "X") && (level == "hard" || level == "normal")) {
        square[4].innerHTML = "O";
        checkForWinner(i = 4);
        
    // The computer adds "O" to a line that only has 1
        
    // Combination 1
    } else if ((square[0].innerHTML == "O" && square[1].innerHTML == "" && square[2].innerHTML == "") && (level == "hard" || level == "normal")) {
        square[1].innerHTML = "O";
        checkForWinner(i = 1);
    } else if ((square[0].innerHTML == "" && square[1].innerHTML == "O" && square[2].innerHTML == "") && (level == "hard" || level == "normal")) {
        square[0].innerHTML = "O";
        checkForWinner(i = 0);
    } else if ((square[0].innerHTML == "" && square[1].innerHTML == "" && square[2].innerHTML == "O") && (level == "hard" || level == "normal")) {
        square[0].innerHTML = "O";
        checkForWinner(i = 0);
        
    // Combination 2
    } else if ((square[2].innerHTML == "O" && square[5].innerHTML == "" && square[8].innerHTML == "") && (level == "hard" || level == "normal")) {
        square[5].innerHTML = "O";
        checkForWinner(i = 5);
    } else if ((square[2].innerHTML == "" && square[5].innerHTML == "O" && square[8].innerHTML == "") && (level == "hard" || level == "normal")) {
        square[2].innerHTML = "O";
        checkForWinner(i = 2);
    } else if ((square[2].innerHTML == "" && square[5].innerHTML == "" && square[8].innerHTML == "O") && (level == "hard" || level == "normal")) {
        square[2].innerHTML = "O";
        checkForWinner(i = 2);
        
    // Combination 3
    } else if ((square[6].innerHTML == "O" && square[7].innerHTML == "" && square[8].innerHTML == "") && (level == "hard" || level == "normal")) {
        square[7].innerHTML = "O";
        checkForWinner(i = 7);
    } else if ((square[6].innerHTML == "" && square[7].innerHTML == "O" && square[8].innerHTML == "") && (level == "hard" || level == "normal")) {
        square[6].innerHTML = "O";
        checkForWinner(i = 6);
    } else if ((square[6].innerHTML == "" && square[7].innerHTML == "" && square[8].innerHTML == "O") && (level == "hard" || level == "normal")) {
        square[7].innerHTML = "O";
        checkForWinner(i = 7);
        
    // Combination 4
    } else if ((square[0].innerHTML == "O" && square[3].innerHTML == "" && square[6].innerHTML == "") && (level == "hard" || level == "normal")) {
        square[3].innerHTML = "O";
        checkForWinner(i = 3);
    } else if ((square[0].innerHTML == "" && square[3].innerHTML == "O" && square[6].innerHTML == "") && (level == "hard" || level == "normal")) {
        square[0].innerHTML = "O";
        checkForWinner(i = 0);
    } else if ((square[0].innerHTML == "" && square[3].innerHTML == "" && square[6].innerHTML == "O") && (level == "hard" || level == "normal")) {
        square[3].innerHTML = "O";
        checkForWinner(i = 3);
        
    // Combination 5
    } else if ((square[2].innerHTML == "O" && square[4].innerHTML == "" && square[6].innerHTML == "") && (level == "hard" || level == "normal")) {
        square[4].innerHTML = "O";
        checkForWinner(i = 4);
    } else if ((square[2].innerHTML == "" && square[4].innerHTML == "O" && square[6].innerHTML == "") && (level == "hard" || level == "normal")) {
        square[2].innerHTML = "O";
        checkForWinner(i = 2);
    } else if ((square[2].innerHTML == "" && square[4].innerHTML == "" && square[6].innerHTML == "O") && (level == "hard" || level == "normal")) {
        square[2].innerHTML = "O";
        checkForWinner(i = 2);
        
    // Combination 6
    } else if ((square[0].innerHTML == "O" && square[4].innerHTML == "" && square[8].innerHTML == "") && (level == "hard" || level == "normal")) {
        square[4].innerHTML = "O";
        checkForWinner(i = 4);
    } else if ((square[0].innerHTML == "" && square[4].innerHTML == "O" && square[8].innerHTML == "") && (level == "hard" || level == "normal")) {
        square[0].innerHTML = "O";
        checkForWinner(i = 0);
    } else if ((square[0].innerHTML == "" && square[4].innerHTML == "" && square[8].innerHTML == "O") && (level == "hard" || level == "normal")) {
        square[0].innerHTML = "O";
        checkForWinner(i = 0);
        
    // Combination 7
    } else if ((square[3].innerHTML == "O" && square[4].innerHTML == "" && square[5].innerHTML == "") && (level == "hard" || level == "normal")) {
        square[4].innerHTML = "O";
        checkForWinner(i = 4);
    } else if ((square[3].innerHTML == "" && square[4].innerHTML == "O" && square[5].innerHTML == "") && (level == "hard" || level == "normal")) {
        square[5].innerHTML = "O";
        checkForWinner(i = 5);
    } else if ((square[3].innerHTML == "" && square[4].innerHTML == "" && square[5].innerHTML == "O") && (level == "hard" || level == "normal")) {
        square[4].innerHTML = "O";
        checkForWinner(i = 4);
        
    // Combination 8
    } else if ((square[1].innerHTML == "O" && square[4].innerHTML == "" && square[7].innerHTML == "") && (level == "hard" || level == "normal")) {
        square[4].innerHTML = "O";
        checkForWinner(i = 4);
    } else if ((square[1].innerHTML == "" && square[4].innerHTML == "O" && square[7].innerHTML == "") && (level == "hard" || level == "normal")) {
        square[1].innerHTML = "O";
        checkForWinner(i = 1);
    } else if ((square[1].innerHTML == "" && square[4].innerHTML == "" && square[7].innerHTML == "O") && (level == "hard" || level == "normal")) {
        square[4].innerHTML = "O";
        checkForWinner(i = 4);
    
    // Easy    
    // Else
    } else {
        iNumber = (Math.floor(Math.random() * 9));
        if (square[iNumber].innerHTML != "X" && square[iNumber].innerHTML != "O") {
            square[iNumber].innerHTML = "O";
            checkForWinner(iNumber);
        } else {
            computerPlays();
        }
    }
}

/*
 * Function: Clear
 *
 * Used by: setLevel and checkForWinner
 *
 * Sets the winner to "none" (the level stays the same)
 * For each square: Remove what's inside
 *                  Remove the winner class
 *                  Add the pointer class
 * 
*/
function clear() {
    window.winner = "none";
    for (var i = 0; i < 9; i++) {
        square[i].innerHTML = "";
        square[i].classList.remove("winner");
        square[i].classList.add('pointer');
    }
}
