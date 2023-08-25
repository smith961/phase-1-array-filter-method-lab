// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
console.log(drivers);



function findMatching(drivers, name) {
    return drivers.filter(function(driver) {
        return driver.toLowerCase() === name.toLowerCase();
    });
}


console.log(findMatching(drivers, "Bobby"));

console.log(findMatching(drivers, 'Sammy'));


// const fuzzyMatch = findMatching;
function fuzzyMatch(drivers, name){
    
    return drivers.filter(function(driver){
        return    driver.toLowerCase().slice(0, name.length) === name.toLowerCase();
    })
}

console.log(fuzzyMatch(drivers, "mm"))

//check if name matches

function matchName(drivers, name){
    return drivers.filter(function (driver){
        return driver.name.toLowerCase() == name.toLowerCase();
    })
}

console.log(matchName(drivers, "Bobby"))






