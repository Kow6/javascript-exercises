const sumAll = function(numOne, numTwo) {

    if (numOne < 0 || numTwo < 0 || typeof(numOne) != "number" || typeof(numTwo) != "number") {
      return 'ERROR'}
      
    else{
    
    const sortArray = [numOne, numTwo]
    sortArray.sort(function(a, b){return a - b})
    
    numTwo = sortArray.pop()
    numOne = sortArray.pop()
    
    
        let i = numOne
        let n = 0
        while (i < numTwo){
          n = n + i
          i++}
        
           
        return n + numTwo
        }
    }
        
       

// Do not edit below this line
module.exports = sumAll;
