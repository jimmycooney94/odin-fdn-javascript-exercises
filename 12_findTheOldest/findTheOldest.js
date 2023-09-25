const findTheOldest = function (people) {
    const oldestToYoungest = people.sort((a, b) => {
        if (getAge(a) < getAge(b)) return 1;
        else if (getAge(a) == getAge(b)) return 0;
        else return -1;
    });
    return oldestToYoungest[0];
};

const getAge = function (person) {
    return ((person.yearOfDeath != undefined ? person.yearOfDeath : new Date().getFullYear()) - person.yearOfBirth);
};

// Do not edit below this line
module.exports = {
    findTheOldest,
    getAge
}