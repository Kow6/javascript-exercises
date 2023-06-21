const add = function(a,b) {
  let sum = a + b
  return sum
	
};

const subtract = function(a, b) {
	let difference = a - b
  return difference
};

const sum = function(array) {
  return array.reduce((sum, current) => sum + current, 0)
   

	
};



const multiply = function(array) {
  return array.reduce((product, current) => product * current, 1)


};

const power = function(num, power){
  
  let square = 1
  for (let i = 1; i <= power; i++){
  square =  square * num
  }
  return square
}



const factorial = function(num){
  
  let holder = 1
  for (let i = 1 ; i < num +1 ; i++){
  holder =  holder * i
  }
  return holder
}
	


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
