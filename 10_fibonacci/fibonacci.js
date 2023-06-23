const fibonacci = function(input) {

    if (input < 0){return 'OOPS'}

    let a = 1;
    let b = 1;
    let c = 0;
    const array = []
    
    while (array.length < Number(input)) {
    c = a + b
    array.push(a, b, c)
    a = c + b
    b = c + a
    }
    
    return array[(Number(input) -1)]
    

};

// Do not edit below this line
module.exports = fibonacci;
