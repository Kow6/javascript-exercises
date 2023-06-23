const findTheOldest = function(people) {

const oldest = people.sort((a, b) => {
    
    

    let aLifeSpan = a.yearOfDeath - a.yearOfBirth
    let bLifeSpan = b.yearOfDeath -b.yearOfBirth
    
    if (isNaN (aLifeSpan)) {
        aLifeSpan = new Date().getFullYear() -a.yearOfBirth
    }
    if (isNaN (bLifeSpan)) {
        bLifeSpan = new Date().getFullYear() -b.yearOfBirth
    }

    return aLifeSpan > bLifeSpan ? -1 : 1}
    );

return oldest[0]
};



// Do not edit below this line
module.exports = findTheOldest;
