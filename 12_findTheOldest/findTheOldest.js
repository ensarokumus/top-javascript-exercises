const findTheOldest = function (person) {
    person.map(obj => obj.yearOfDeath === undefined ? obj.yearOfDeath = 2023 : obj.yearOfDeath); 
    person.sort((a, b) => (a.yearOfBirth - a.yearOfDeath) - (b.yearOfBirth - b.yearOfDeath));
    return person[0];
}; 

// Do not edit below this line
module.exports = findTheOldest;
