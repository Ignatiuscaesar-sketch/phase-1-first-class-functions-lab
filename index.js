// Code your solution in this file!
// Array of driver names for Scuber service
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

//ReturnFirstTwoDrivers function
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};
console.log(returnFirstTwoDrivers(drivers));

//ReturnLastTwoDrivers function
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};
console.log(returnLastTwoDrivers(drivers));

//SelectingDrivers array
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
console.log(selectingDrivers[0](drivers))
console.log(selectingDrivers[1](drivers))

//CreateFareMultiplier function
const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
};

//FareDoubler function
const fareDoubler = createFareMultiplier(2);

//FareTripler function
const fareTripler = createFareMultiplier(3);

// Test the fareDoubler with a fare of 10
console.log(fareDoubler(10));

// Test the fareTripler with a fare of 10
console.log(fareTripler(10));

//SelectDifferentDrivers function
const selectDifferentDrivers = function(drivers, whichDrivers) {
    return whichDrivers(drivers);
};
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));

