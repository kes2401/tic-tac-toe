// winning combinations
var winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [2, 5, 8],
    [1, 4, 7]
];

var playerShots = []; // this will hold an array of all shots played by the user
var cpuShots = []; // this will hold an array of all shots played by the computer
var currentShot;

var playerTurn = true; // controls whether it is the player's turn or computer's turn


// event handler to place mark on selected cell, add cell to shot array, and check whether there is a winner
$('.cell').on('click', function(e){
    (this).innerHTML = 'X';

    // get id of the cell clicked and pass it to an array of shots played 
    currentShot = $(this).attr('id');
    playerShots.push(currentShot);
    playerShots.sort() // -----does it need to be sorted??? review when coding for comparison check with win combos
    console.log('current shot: ' + currentShot);
    console.log('player shots array: ' + playerShots);

    // compare shots array to winning combos


    // if winner end game and show win modal


    // finally, if not a winner change control to cpu player

});