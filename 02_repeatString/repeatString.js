const repeatString = function(string, num) {
   
let printthis = string

while (num > 1){
    printthis += string


num--
}

return printthis

};

repeatString('hey', 3)

// Do not edit below this line
module.exports = repeatString;
