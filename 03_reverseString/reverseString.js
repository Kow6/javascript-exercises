const reverseString = function(input) {
    
    
    let printThis = ""
    
    let track = input.length
    
    while (track > -1){
          let trackTwo = track + 1
          let holding = input.slice(track, trackTwo)
          printThis = printThis + holding
          track--
    }
    return printThis
}

reverseString('donkey')



/* doesn't work
    stringLength = input.length;
    
    while(stringLength > 0)
    {
        let holding = input.slice(stringLength, stringLength)
        let printThis = printThis + holding

        stringLength--
    }

    return printThis
*/

// Do not edit below this line
module.exports = reverseString;
