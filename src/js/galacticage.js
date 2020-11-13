export class GalacticAge {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.mercuryAge = 0;
  }

  calcMercury(earthAge) {
    let age = this.earthAge / (6/25);
    return this.mercuryAge = parseFloat(age.toPrecision(4));
  }
};