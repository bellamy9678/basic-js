const chainMaker = {
  out : [],

  getLength() {
    return this.out.length;
  },

  addLink(value) {
    if (arguments.length != 0) {
      this.out.push('( ' + value + ' )');
    } else {
      this.out.push('( )');
    }
    return this;
  },

  removeLink(position) {
    if (!Number.isInteger(position) || position <= 0 || position > this.getLength() ) {
      this.out = [];
      throw new Error('not valid position');
    }
    this.out.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.out = this.out.reverse();
    return this;
  },

  finishChain() {
    let str = this.out.join('~~');
    this.out = [];
    return str;
  }
};

module.exports = chainMaker;
