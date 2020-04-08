import { alea } from 'seedrandom';

class Randomizer {
  constructor(choiceSet, seed) {
    this.seed = seed;
    switch (choiceSet) {
      case 'minds':
        this.dataSet = require('../data/minds.json');
        break;
    }
  }
  getRandom() {
    const arng = new alea(this.seed);
    const dsLength = this.dataSet.length;
    let signedRandInRange = arng.int32() % dsLength;
    let unsignedRandInRange = signedRandInRange >= 0 ? signedRandInRange : signedRandInRange * -1;
    return this.dataSet[unsignedRandInRange];
  }
}

export { Randomizer };
