var fiat = {
    make: "Fiat",    
    model: "500",    
    year: 1957,     
    color: "Medium Blue",    
    passengers: 2,    
    convertible: false,    
    mileage: 88000 
};

var taxi = {
    make: "Webville Motors",
    model: "taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281341
};

function prequal(car) {
    if (car.mileage > 10000) {
        return false;
    } else if (car.year > 1960) {
        return false;
    }
    return true;
}

var worthALook = prequal(taxi);

if (worthALook) {
    console.log("You gotta check out this " + taxi.make + " " + taxi.model);
} else {
    console.log("You should really pass o the " + taxi.make + " " + taxi.model);
}