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





// event handler to place mark on selected cell
$('.cell').on('click', function(e){
    (this).innerHTML = 'X';

    // get id of the cell clicked and pass it to an array of shots played 

});