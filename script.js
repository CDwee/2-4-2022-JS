// started at 9:15 2-4-2022

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Micheal', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     // console.log(this)
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.getSummary());

// Challenge
// "Jonas is a 46-year old teacher, and he has a/no driver's license"
if (jonas.hasDriversLicense == true) {
    console.log(`${jonas.firstName} is a ${jonas.age} year old ${jonas.job}, and he does have a driver's license`)
} else if (jonas.hasDriversLicense == false) {
    console.log(`${jonas.firstName} is a ${jonas.age} year old ${jonas.job}, and he does not have a driver's license`);
};
*/
// stopped coding javascript at 10:26 2-4-2022 and switching over to python to finish my worksheets from my python class.
