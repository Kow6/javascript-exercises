const add = function(a,b) {
  let sum = a + b
  return sum
	
};

const subtract = function(a, b) {
	let difference = a - b
  return difference
};

const sum = function(myArray) {

  let n = 0;
  let x = 0;
  
  while (myArray.length > 0) {
    
    n = myArray.pop()
    x += n;
  }
  
  return x
   
	
};



const multiply = function(array1) {
  let n = 0;
  let x = 1;
  
  while (array1.length > 0) {
    
    n = array1.pop()
    x = x * n;
  }
  
  return x

};

const power = function(a, b) {
  let root = 1
  for (let i = 1; i < b + 1; i++){
    root = root * a
  }
return root

	
};

const factorial = function() {
  
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
