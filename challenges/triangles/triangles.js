class Triangle {
  constructor(side1, side2, side3) {
    this.sides = [side1, side2, side3];

    if (this.sides[0] <= 0 || this.sides[1] <= 0 || this.sides[2] <= 0) {
      throw new Error("Invalid Triangle");
    } else if (
      (this.sides[0] + this.sides[1]) <= this.sides[2] ||
      (this.sides[0] + this.sides[2]) <= this.sides[1] ||
      (this.sides[1] + this.sides[2]) <= this.sides[0]
    ) {
      throw new Error("Invalid Side lengths");
    } else {
      if (this.sides.some(side => side === undefined)) {
        throw new Error("Undefined side(s)");
      }
    }
  }

  kind() {
    if (this.isEqualateral()) {
      return "equilateral";
    } else if (this.isScalene()) {
      return "scalene";
    } else if (this.isIsosceles()) {
      return "isosceles";
    }
  }

  isEqualateral() {
    let side1 = this.sides[0];
    return this.sides.every(side => side1 === side);
  }

  isScalene() {
    return this.sides.every((side, index) => this.sides.indexOf(side) === index);
  }

  isIsosceles() {
    return (this.sides[0] === this.sides[1] || this.sides[0] === this.sides[2] || this.sides[1] === this.sides[2]);


  }
}

module.exports = Triangle;