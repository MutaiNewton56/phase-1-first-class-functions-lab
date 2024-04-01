// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiplier) {
    return function(value) {
        return value * multiplier;
    };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(drivers, selectionFunction) {
    return selectionFunction(drivers);
};

const drivers = ['Bob', 'Alice', 'Charlie', 'David'];

console.log(returnFirstTwoDrivers(drivers));
console.log(returnLastTwoDrivers(drivers)); 

console.log(selectingDrivers[0](drivers)); 
console.log(selectingDrivers[1](drivers)); 

console.log(createFareMultiplier(2)(10)); 
console.log(createFareMultiplier(3)(10)); 

console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); 
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers)); 
