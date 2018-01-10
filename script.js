$(document).ready(function(){

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

    var playerToken = 'X';
    var cpuToken = 'O';

    var playerShots = []; // holds all shots played by the user
    var cpuShots = []; // holds all shots played by the computer
    var allShots = []; // holds all the shots played in any single game

    var currentShot; // the current shot, regardless of player

    var playerTurn; // controls whether it is the player's turn or computer's turn
    var winner; // set to true if there is a winner then the game ends
    var inPlay; // determines whether the game is in play

    init();

    // event handler for user to take their turn on a cell
    $('.cell').on('click', function(){
        if(playerTurn && inPlay){    

            // get id of selected cell, check if available, and if so mark the cell and pass id to an array of shots played
            currentShot = $(this).attr('id');
            if(allShots.indexOf(currentShot) === -1){
                (this).innerHTML = playerToken;
                allShots.push(currentShot);
                playerShots.push(currentShot);
                            
                // check against shots played against winning combinations, but only after 3 shots are taken
                if(playerShots.length >= 3){
                    // check if there's a winner
                    checkWinCombos(playerShots);

                    // if there's a winner then end game and show modal
                    if(winner){
                        alert("You WON!!!");
                    } 
                }
            playerTurn = false;
            cpuPlay();
            }
        };
    });

    function init(){
        winner = false;
        inPlay = true;
        playerTurn = true;
    }

    function checkWinCombos(arr){
        var tempArr = arr.map(Number); // converts all numbers in shots array from string types to number types
        winCombos.forEach(function(element){
            if(tempArr.indexOf(element[0]) >= 0 && tempArr.indexOf(element[1]) >= 0 && tempArr.indexOf(element[2]) >= 0){
                winner = true;
                inPlay = false;
            }
        });   
    };

    function cpuPlay(){
        // code for taking the computer's turn
        if(!playerTurn && inPlay){
            currentShot = 0; // --- SET CODE TO SELECT COMPUTER'S CELL
            if(allShots.indexOf(currentShot) === -1){
                (this).innerHTML = cpuToken;
                allShots.push(currentShot);
                cpuShots.push(currentShot);
                if(cpuShots.length >= 3){
                    checkWinCombos(cpuShots);
                    if(winner){
                        alert("You Lost...");
                    } 
                }
            playerTurn = true;
            }
        }
    }





});