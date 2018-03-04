
var start = document.getElementById("start");
var tile = document.querySelectorAll("#game div");
var player = 0;

function selectTiles(t1,t2,t3) {
  start.innerHTML = t1.innerHTML + " Is the Winner!";
}

function calcWinner(){

  var tile1 = document.getElementById("tile1"),
      tile2 = document.getElementById("tile2"),
      tile3 = document.getElementById("tile3"),
      tile4 = document.getElementById("tile4"),
      tile5 = document.getElementById("tile5"),
      tile6 = document.getElementById("tile6"),
      tile7 = document.getElementById("tile7"),
      tile8 = document.getElementById("tile8"),
      tile9 = document.getElementById("tile9");

  if (tile1.innerHTML !== "" && tile1.innerHTML === tile2.innerHTML && tile1.innerHTML === tile3.innerHTML) {
    selectTiles(tile1,tile2,tile3);
  } else if (tile4.innerHTML !== "" && tile4.innerHTML === tile5.innerHTML && tile4.innerHTML === tile6.innerHTML) {
    selectTiles(tile4,tile5,tile6);
  } else if (tile7.innerHTML !== "" && tile7.innerHTML === tile8.innerHTML && tile7.innerHTML === tile9.innerHTML) {
    selectTiles(tile7,tile8,tile9);
  } else if (tile1.innerHTML !== "" && tile1.innerHTML === tile4.innerHTML && tile1.innerHTML === tile7.innerHTML) {
    selectTiles(tile1,tile4,tile7);
  } else if (tile2.innerHTML !== "" && tile2.innerHTML === tile5.innerHTML && tile2.innerHTML === tile8.innerHTML) {
    selectTiles(tile2,tile5,tile8);
  } else if (tile3.innerHTML !== "" && tile3.innerHTML === tile6.innerHTML && tile3.innerHTML === tile9.innerHTML) {
    selectTiles(tile3,tile6,tile9);
  } else if (tile1.innerHTML !== "" && tile1.innerHTML === tile5.innerHTML && tile1.innerHTML === tile9.innerHTML) {
    selectTiles(tile1,tile5,tile9);
  } else if (tile3.innerHTML !== "" && tile3.innerHTML === tile5.innerHTML && tile3.innerHTML === tile7.innerHTML) {
    selectTiles(tile3,tile5,tile7);
  }
}

for(var i = 0; i < tile.length; i++) {

    tile[i].onclick = function() {

      if(player % 2 === 0 && this.innerHTML != "O") {
         this.innerHTML = "X"; 
         calcWinner();
         player += 1;
      } else {
         this.innerHTML = "O";
         calcWinner();
         player += 1;  
      }
    };
}

function replay() {
  for (var i = 0; i < tile.length; i++) {
      tile[i].innerHTML = "";
      start.innerHTML = "Play";
  }
}