export class GalacticAge {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.mercuryAge = 0;
    this.venusAge = 0;
    this.marsAge = 0;
    this.jupiterAge = 0;
  }

  calcMercury(earthAge) {
    let age = this.earthAge / .24;
    return this.mercuryAge = parseFloat(age.toPrecision(4));
  }

  calcVenus(earthAge) {
    let age = this.earthAge / .62;
    return this.venusAge = parseFloat(age.toPrecision(4));
  }

  calcMars(earthAge) {
    let age = this.earthAge / 1.88;
    return this.marsAge = parseFloat(age.toPrecision(4));
  }

  calcJupiter(earthAge) {
    let age = this.earthAge / 11.86;
    return this.jupiterAge = parseFloat(age.toPrecision(4));
  }
};