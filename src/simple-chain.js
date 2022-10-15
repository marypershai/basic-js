const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  
  getLength() {
    return this.chain.length;
  },
  
  addLink(value) {
    this.chain.push('' + value);
    return this;
  },

  removeLink(position) {
    if (!Number.isInteger(position) || position < 1 || position > this.getLength()) {
      this.chain = [];
      throw Error("You can't remove incorrect link!");
    }
    else {
      this.chain.splice(position - 1, 1);
    }
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let finishChain = this.chain.join(' )~~( ');
    this.chain = [];
    finishChain = '( ' + finishChain + ' )';
    return finishChain;
  }
};

module.exports = {
  chainMaker
};
