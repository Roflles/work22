var fiat = {
    make: "Fiat",    
    model: "500",    
    year: 1957,     
    color: "Medium Blue",    
    passengers: 2,    
    convertible: false,    
    mileage: 88000,
    started: false,    fuel: 0,
    start: function() {
        if (this.fuel == 0) {
            alert("The car is on empty, fill up before starting!")
        } else {
            this.started = true;
        }
    },
    stop: function() {
        this.started = false;
    },
    drive: function() {
        if (this.started) {
            if (this.fuel > 0) {
                alert(this.make + " " + this.model + " goes zoom zoom!");
                this.fuel = this.fuel - 1;
            } else {
                alert("Uh oh, out of fuel.");
                this.stop();
            }
        } else {
            alert("You need to start the engine first.");
        }
    },
    addFuel: function(amount) {
        this.fuel = this.fuel + amount;
    }
};

fiat.start();
fiat.addFuel(2);
fiat.start();
fiat.drive();
fiat.stop()


var taxi = {
    make: "Webville Motors",
    model: "taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281341,
    started: false,
    start: function() {
        this.started = true;
    },
    stop: function() {
        this.started = false;
    },
    drive: function() {
        if (this.started) {
            alert(this.make + " " + this.model + " goes zoom zoom!");
        } else {
            alert("You need to start the engine first.");
        }
    }
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
};

var chevy = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "red",
    passengers: 2,
    convertible: false,
    mileage: 1021,
    started: false,
    start: function() {
        this.started = true;
    },
    stop: function() {
        this.started = false;
    },
    drive: function() {
        if (this.started) {
            alert(this.make + " " + this.model + " goes zoom zoom!");
        } else {
            alert("You need to start the engine first.");
        }
    }
};


taxi.start(); 
taxi.drive();
taxi.stop();

chevy.start();
chevy.drive();
chevy.stop();

var eightBall = { index: 0,
                  advice: ["yes", "no", "maybe", "not a chance"],
                  shake: function() {
                    this.index = this.index +1;
                    if (this.index >= this.advice.lenght) {
                        this.index = 0;
                    }
                  },
                  look: function() {
                    return this.advice[this.index];
                  }
};
eightBall.shake();
console.log(eightBall.look());
eightBall.shake();
console.log(eightBall.look());
eightBall.shake();
console.log(eightBall.look());
























