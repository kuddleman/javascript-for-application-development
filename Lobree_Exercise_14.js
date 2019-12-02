class Vehicle {
  constructor(color,
              direction,
              currentSpeed,
              topSpeed,
              engineStarted) {
    this._color = color;
    this._direction = direction;
    this._currentSpeed = currentSpeed;
    this._topSpeed = topSpeed;
    this._engineStarted = engineStarted;           
    }

  accelerate() {
    console.log("We are accelerating!");
  }  

  brake() {
    console.log("We are brake!");
  }  

  turnOn() {
    console.log("We are turned ON!");
  }  

  turnOff() {
    console.log("We are turned OFF!");
  }  

  turnLeft() {
    console.log("We are turning left!");
  }  

  turnRight() {
    console.log("We are turning right!");
  } 
  
  set direction(newDirection) {
    if (newDirection > 0 && newDirection < 359) {
      this._direction = newDirection;
    } else {
      alert("Sorry, Charlie.  Your direction is foo foo!")
    }
  }
}

class Bus extends Vehicle {
  constructor(color,
    direction,
    currentSpeed,
    topSpeed,
    engineStarted,
    numberOfSeats) {
    super(color, direction, currentSpeed, topSpeed, engineStarted, numberOfSeats);
    this._numberOfSeats = numberOfSeats;         
  }

  accelerate() {
  console.log("We are accelerating!");
  }  

  brake() {
  console.log("We are brake!");
  }  

  turnOn() {
  console.log("We are turned ON!");
  }  

  turnOff() {
  console.log("We are turned OFF!");
  }  

  turnLeft() {
  console.log("We are turning left!");
  }  

  turnRight() {
  console.log("We are turning right!");
  } 

  set direction(newDirection) {
    if (newDirection > 0 && newDirection < 359) {
    this._direction = newDirection;
    } else {
    alert("Sorry, Charlie.  Your direction is foo foo!")
    }
  }

}

class Ambulance extends Vehicle {
  constructor(color,
    direction,
    currentSpeed,
    topSpeed,
    engineStarted) {
      super(color, direction, currentSpeed, topSpeed, engineStarted)      
  }

  accelerate() {
  console.log("We are accelerating!");
  }  

  brake() {
  console.log("We are brake!");
  }  

  turnOn() {
  console.log("We are turned ON!");
  }  

  turnOff() {
  console.log("We are turned OFF!");
  }  

  turnLeft() {
  console.log("We are turning left!");
  }  

  turnRight() {
  console.log("We are turning right!");
  } 

  sirenOn() {
    console.log("The siren is ON!")
  }

  sirenOff() {
    console.log("The siren is Off!")
  }

  set direction(newDirection) {
    if (newDirection > 0 && newDirection < 359) {
    this._direction = newDirection;
    } else {
    alert("Sorry, Charlie.  Your direction is foo foo!")
    }
  }

}