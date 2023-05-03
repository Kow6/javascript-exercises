const repeatString = function(string, num) {
   
if (num > -1){
        let printthis = ""
        while (num > 0){
            printthis += string


        num--
        }
        return printthis
}
    
else { let printthis = "ERROR"
return printthis
}
    


};

repeatString('hey', 3)

// Do not edit below this line
module.exports = repeatString;
