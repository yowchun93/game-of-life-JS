
// a file to just practise the looping of multi dimensional array 

var array = [
	  [0,0,0,0,0],
	  [0,0,1,0,0],
	  [0,0,1,0,0],
	  [0,0,1,0,0],
	  [0,0,0,0,0]
	]

function loopArray(array) {
	
	height = array.length;
	width = array[0].length;

	console.log("is this even working");

	for(var y = 0; y < height; y ++) {
		for (var x =0; x< width; x++) {
			var neighbors = aliveNeighbors(array, x ,y)
		}
	}
}

// getting property of undefined
function aliveNeighbors(array, x ,y ) {

	var sum = 0;

	var neighbors = [
		
	]

}


loopArray(array);



