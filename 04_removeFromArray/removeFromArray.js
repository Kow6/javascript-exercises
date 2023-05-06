const removeFromArray = function(myArray, ...arrayOfRemove) {
  
  while (arrayOfRemove.length > 0){ 
  
  //take the toBeRemoved array and shift out the first number into a variable removeThis
 
  let removeThis = arrayOfRemove.shift()
  
   //run the code that removes that variable
  
  let i = myArray.indexOf(removeThis)
  if (i > -1){
  myArray.splice(i, 1)
  }

  }
  
  
  //set the return value
  return myArray

  
    
  }
  
  
 
// Do not edit below this line

// Do not edit below this line
module.exports = removeFromArray;
