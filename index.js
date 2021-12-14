const returnFirstTwoDrivers = (array) => {
    return array.slice(0,2);
}

const returnLastTwoDrivers = (array) => {
    return array.slice(-2);
}

const createFareMultiplier = (num) => {
    return function(){
        return num ** 2
    };
}

const fareDoubler = (number) => {
    return number * 2
}

const fareTripler = (number) => {
    return number * 3
}

const selectDifferentDrivers = (d, f) => {
    const selectedDriver = f(d);
    return selectedDriver;
}


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]