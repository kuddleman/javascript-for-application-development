var GamePlayer = 
  function(  
            name, 
            livesLeft, 
            score, 
            speed, 
            gridLocationX=0, 
            gridLocationY=0
          ) {
            this.name = name;
            this.livesLeft = livesLeft;
            this.score = score;
            this.speed = speed;
            this.gridLocationX = gridLocationX;
            this.gridLocationY = gridLocationY;

            GamePlayer.prototype.die = function() {
              if (this.livesLeft > 0  ) {
                return this.livesLeft - 1 
              } else {
                //make player die
                console.log("Player ran out of lives and is DEAD! Game over!")
              }

            },
            GamePlayer.prototype.moveLeft = function(gridLocationX, gridLocationY) {
                if( this.gridLocationX > 1 ) {
                  return this.gridLocationX - 1;
                }
                return this.gridLocationX
            },
            GamePlayer.prototype.moveRight = function(gridLocationX, gridLocationY  ) {
              if( this.gridLocationX <= 8 ) {
                return this.gridLocationX + 1;
              }
              return this.gridLocationX
            },
            GamePlayer.prototype.moveUp = function( gridLocationX, gridLocationY  ) {
              if( this.gridLocationY >= 1 ) {
                return this.gridLocationY - 1;
              }
              return this.gridLocationY

            },
            GamePlayer.prototype.moveDown = function( gridLocationX, gridLocationY  ) {
              if( this.gridLocationY <= 8 ) {
                return this.gridLocationY + 1;
              }
              return this.gridLocationY
            }
          }






// var Animal =  function(type, weight, color, fur, length){
//   //Properties
//   this.type = type;
//   this.weight = weight;
//   this.color = color;
//   this.fur = fur;
//   this.length = length;
//   this.soundItMakes = soundItMakes;
//   //Methods
//   animal.Prototype.makeSound= function makeSound()
//   {
//       alert(this.soundItMakes);
//   },
//   Animal.Prototype.breathe = function()
//   {
//       alert(this.type + " is " + breathing);
//   }
// }