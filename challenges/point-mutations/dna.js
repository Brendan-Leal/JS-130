"use strict";

class DNA {
  constructor(strand) {
    this.strand = strand;
    this.counter = 0;
  }

  hammingDistance(strand2) {
    this.counter = 0;

    if (this.strand === strand2) {
      return this.counter;
    }
    let longestStrand = this.strand;
    let shortStrand = strand2.split("");

    if (longestStrand.length < strand2.length) {
      longestStrand = strand2;
      shortStrand = this.strand.split("");
    }

    shortStrand.forEach((base, index) => {
      if (base !== longestStrand[index]) {
        this.counter += 1;
      }
    });

    return this.counter;
  }
}


module.exports = DNA;