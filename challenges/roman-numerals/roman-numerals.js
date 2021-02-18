"use strict";

class RomanNumeral {
  static decimalToRoman = {
    "1000": "M",
    "900": "CM",
    "500": "D",
    "400": "CD",
    "100": "C",
    "90": "XC",
    "50": "L",
    "40": "XL",
    "10": "X",
    "9": "IX",
    "5": "V",
    "4": "IV",
    "1": "I",
  };

  static romanToDecimal = {
    "M": "1000",
    "CM": "900",
    "D": "500",
    "CD": "400",
    "C": "100",
    "XC": "90",
    "L": "50",
    "XL": "40",
    "X": "10",
    "IX": "9",
    "V": "5",
    "IV": "4",
    "I": "1",
  }

  constructor(number) {
    this.number = number;
    this.romanNumeral = [];
  }

  toRoman() {
    let digitsAsMultiplesOf10 = this.formatDigitsAsMultiplesOf10();

    digitsAsMultiplesOf10.forEach(multipleOf10 => {
      let romanValue = [];
      let count = this.getFirstDigitOf(multipleOf10);
      let numbOfZeros = this.getNumberOfZerosIn(multipleOf10);
      let onesKey = "1" + "0".repeat(numbOfZeros);
      let fivesKey = "5" + "0".repeat(numbOfZeros);

      if (this.perfectConversion(multipleOf10)) {
        console.log("perfect match\n");
        this.romanNumeral.push(RomanNumeral.decimalToRoman[multipleOf10]);

      } else if (this.firstDigitIsBetween4And1(multipleOf10)) {
        while (count > 0) {
          romanValue.push(RomanNumeral.decimalToRoman[onesKey]);
          count -= 1;
        }
        this.romanNumeral.push(romanValue.join(""));

      } else if (this.firstDigitIsBetween9And5(multipleOf10)) {

        let difference = (Number(multipleOf10) - Number(fivesKey));
        count = this.getFirstDigitOf(String(difference));

        romanValue.push(RomanNumeral.decimalToRoman[fivesKey]);

        while (count > 0) {
          romanValue.push(RomanNumeral.decimalToRoman[onesKey]);
          count -= 1;
        }

        this.romanNumeral.push(romanValue.join(""));
      }      
    });

    return this.romanNumeral.reverse().join("");
  }

  getNumberOfZerosIn(multipleOf10) {
    return Number(multipleOf10.length - 1);
  }

  getFirstDigitOf(multipleOf10) {
    return Number(multipleOf10[0]);
  }

  perfectConversion(multipleOf10) {
    return multipleOf10 in RomanNumeral.decimalToRoman;
  }

  firstDigitIsBetween4And1(multipleOf10) {
    return Number(multipleOf10[0]) < 4 && Number(multipleOf10[0]) > 1;
  }

  firstDigitIsBetween9And5(multipleOf10) {
    return Number(multipleOf10[0]) < 9 && Number(multipleOf10[0]) > 5;
  }

  formatDigitsAsMultiplesOf10() {
    let tempArray = String(this.number).split("").reverse().map(digit => Number(digit));
    let powerOfTen = 1;

    tempArray = tempArray.map((number, index) => {
      if (index >= 1) {
        powerOfTen *= 10;
        return String(Number(number) * powerOfTen);
      } else {
        return String(number);
      }
    });
    return tempArray.slice();;
  }
}

module.exports = RomanNumeral;