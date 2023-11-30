const Automobile = {
    start: function() {
      return "The engine is started.";
    },
    stop: function() {
      return "The engine is stopped.";
    }
  };
  
  const Car = Object.create(Automobile);
  Car.drive = function() {
    return "The car is moving.";
  };
  
  function SportsCar(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  
  SportsCar.prototype = Object.create(Car);
  SportsCar.prototype.constructor = SportsCar;
  
  SportsCar.prototype.boost = function() {
    return "The sports car is boosting!";
  };
  
  const mySportsCar = new SportsCar("Tata", "XYZ", 2023);
  
  document.getElementById("output").innerHTML =
    `${mySportsCar.start()}<br>` +
    `${mySportsCar.drive()}<br>` +
    `${mySportsCar.boost()}<br>` +
    `${mySportsCar.stop()}`;
  