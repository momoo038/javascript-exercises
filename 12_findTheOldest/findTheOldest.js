const findTheOldest = function(people) {
    const calcAge = people.sort((a, b) =>{
        // initialize age variables
        let aAge = 0;
        let bAge = 0;

        // if yearOfDeath has a value, calculate total age
        if (Number.isInteger(a.yearOfDeath)) {
            aAge = a.yearOfDeath - a.yearOfBirth;
        // if yearOfDeath value is undefined, get current year
        } else if (b.yearOfDeath == undefined) {
            aAge = new Date().getFullYear() - a.yearOfBirth;
        }
        if (Number.isInteger(b.yearOfDeath)) {
            bAge = b.yearOfDeath - b.yearOfBirth;
        } else if (b.yearOfDeath == undefined) {
            bAge = new Date().getFullYear() - b.yearOfBirth;
        }
        // sort by oldest to youngest
        return bAge < aAge ? -1 : 1;
    })
    // return oldest person (person at index 0 in the array)
    return calcAge[0];
}
// Do not edit below this line
module.exports = findTheOldest;
