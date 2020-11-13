export class GalacticAge {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.mercuryAge = 0;
    this.venusAge = 0;
  }

  calcMercury(earthAge) {
    let age = this.earthAge / (6/25);
    return this.mercuryAge = parseFloat(age.toPrecision(4));
  }

  calcVenus(earthAge) {
    let age = this.earthAge / (31/50);
    return this.venusAge = parseFloat(age.toPrecision(4));
  }
};