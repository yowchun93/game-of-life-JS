(function() {

  // no idea what this does
  var _ = self.Life = function(seed) {
    // seed is a multi dimensional array
    this.seed = seed;
    //
    this.height = seed.length;
    this.width = seed[0].length

    this.prevBoard = [];
    this.board = cloneArray(seed);
    // this.prevBoard = cloneArray(seed);
  }

  _.prototype = {
    next: function(){
      this.prevBoard = cloneArray(this.board);
      
      for (var y = 0 ; y <this.height ; y++) {
        for ( var x =0; x < this.width ; x++) {
          var neighbors = this.aliveNeighbors(this.prevBoard, x ,y);
          console.log(y,x, ':', neighbors);
        }
      }
    },
    // algorithm for calculating neighbors
    aliveNeighbors: function(array, x ,y) {
      var sum = 0;
      // when a call is trying to check an empty cell, return an empty array
      var prevRow = array[y-1] || []
      var nextRow = array[y+1] || []

      var neighbors = [
        prevRow[x-1], prevRow[x],prevRow[x+1],
        array[y][x-1], array[y][x+1],
        nextRow[x-1], nextRow[x], nextRow[x-1]
      ].forEach(function (a) {
        // undefined to and 0 to 0
        sum += +!!a;
      });
      
      return sum;
    },
    
    toString: function (){

      return this.board.map(function ( row ) { return row.join(' ');}).join('\n');
    }
  }
  
  //
  function cloneArray(array) {
    // creates a shallow copy of an array
    // let me try to digest this function
    return array.slice().map(function ( row ) { return row.slice(); })
  }

})();

var game = new Life([
  [0,0,0,0,0],
  [0,0,1,0,0],
  [0,0,1,0,0],
  [0,0,1,0,0],
  [0,0,0,0,0]
]);

console.log(game.toString());
// toString
// console.log(game + "");
game.next();
console.log(game.toString());
// console.log(game + "");
