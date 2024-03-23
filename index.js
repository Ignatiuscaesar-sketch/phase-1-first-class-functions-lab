// Code your solution in this file!
//ReturnFirstTwoDrivers function
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};

//ReturnLastTwoDrivers function
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};

//SelectingDrivers array
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

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

//SelectDifferentDrivers function
const selectDifferentDrivers = function(drivers, whichDrivers) {
    return whichDrivers(drivers);
};
