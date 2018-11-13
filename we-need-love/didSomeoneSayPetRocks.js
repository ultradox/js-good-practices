

class PetRock {

  constructor(name, price, awesomePoints) {
      this.name = name;
      this.price = price;
      this.awesomePoints = awesomePoints;
  }
}

class PetRockStore {
  constructor(rocks = []) {
      this.rocks = rocks;
  }

  updateAwesomePoints() {
    //   console.log('The number of rocks passed to the function: ' + this.rocks.length)
      for (let i = 0; i < this.rocks.length; i++) {
        //   console.log('Entering the loop on round number: ' + i)
          if (this.rocks[i].name != 'Rocky' && this.rocks[i].name != 'Sylvester La Stone' && this.rocks[i].name != 'Stone Cold Steve Austin') {
            //   console.log('Not one of the 3 bad apples: ' + this.rocks[i].name)
              if (this.rocks[i].awesomePoints > 0) {
                    this.rocks[i].awesomePoints = this.rocks[i].awesomePoints - 1
              }
          } else {
            //   console.log('One of the 3 bad apples: ' + this.rocks[i].name)
              if (this.rocks[i].awesomePoints < 50) {
                //   console.log('Need to boost the points!')
                  this.rocks[i].awesomePoints = this.rocks[i].awesomePoints + 1
                  if (this.rocks[i].name == 'Stoney McStoneface') {
                      console.log('call Calculate StoneysPoints')
                    calculateStoneysPoints()
              }
          }
      }

    }
    return this.rocks;
}

calculateStoneysPoints() {
        if (this.rocks[i].price < 11) {
            if (this.rocks[i].awesomePoints < 50) {
                this.rocks[i].awesomePoints = this.rocks[i].awesomePoints + 1
            }
        }
        if (this.rocks[i].price < 6) {
            if (this.rocks[i].awesomePoints < 50) {
                this.rocks[i].awesomePoints = this.rocks[i].awesomePoints + 1
            }
        }
    }
}

const myRocks = [
  new PetRock('Rocky', 12.50, 49),
  new PetRock('Sylvester La Stone', 1240.20, 5000),
  new PetRock('Stone Cold Steve Austin', 1.30, 49),
  new PetRock('Stoney McStoneface', 0.50, 20),
];

const petRockStore = new PetRockStore(myRocks);
petRockStore.updateAwesomePoints();

console.log(myRocks[2]);