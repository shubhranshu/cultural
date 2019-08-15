import { Randomizer } from "./randomizer";

class Cultural {
  constructor(seed) {
    this.Mind = new Randomizer('minds', seed);
  }
}

export { Cultural };
