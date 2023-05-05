const removeFromArray = function(myArray, toBeRemoved) {
  
   let i = myArray.indexOf(toBeRemoved)
   myArray.splice(i, 1)
  return myArray

  
    
  }
  
  
  removeFromArray([1, 2, 3, 4], 3)
// Do not edit below this line
module.exports = removeFromArray;
