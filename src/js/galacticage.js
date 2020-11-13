export class GalacticAge {
  constructor(earthAge, sex, continent) {
    this.earthAge = earthAge;
    this.sex = sex;
    this.continent = continent;
    this.mercuryAge = 0;
    this.venusAge = 0;
    this.marsAge = 0;
    this.jupiterAge = 0;
    this.remain = [];
    this.extra = [];
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

  lifeExpectancy(earthAge, sex, continent) {
    let lifeExpect = 0;
    switch (this.sex) {
      case ("Male"):
        switch (this.continent) {
          case ("Africa"):
            lifeExpect += 62;
            break;
          case ("Asia"):
            lifeExpect += 76;
            break;
          case ("Australia"):
            lifeExpect += 82;
            break;
          case ("Europe"):
            lifeExpect += 79;
            break;
          case ("North-America"):
            lifeExpect += 77;
            break;
          case ("South-America"):
            lifeExpect += 72;
          break;
        }
        break;
      case ("Female"):
        switch (this.continent) {
          case ("Africa"):
            lifeExpect += 65;
            break;
          case ("Asia"):
            lifeExpect += 80;
            break;
          case ("Australia"):
            lifeExpect += 85;
            break;
          case ("Europe"):
            lifeExpect += 84;
            break;
          case ("North-America"):
            lifeExpect += 81;
            break;
          case ("South-America"):
            lifeExpect += 78;
          break;
        }
        break;
    }
    if (this.earthAge <= lifeExpect) {
      let timeLeft= lifeExpect - this.earthAge;
      let earthRemain = parseFloat((timeLeft).toPrecision(4))
      let mercuryRemain = parseFloat((timeLeft / .24).toPrecision(4))
      let venusRemain = parseFloat((timeLeft / .62).toPrecision(4))
      let marsRemain = parseFloat((timeLeft / 1.88).toPrecision(4))
      let jupiterRemain = parseFloat((timeLeft / 11.86).toPrecision(4))
      this.remain.push(earthRemain, mercuryRemain, venusRemain, marsRemain, jupiterRemain)
      return this.remain;
    } else {
      let timeLeft = this.earthAge - lifeExpect;
      let earthExtra = parseFloat((timeLeft).toPrecision(4))
      let mercuryExtra = parseFloat((timeLeft / .24).toPrecision(4))
      let venusExtra = parseFloat((timeLeft / .62).toPrecision(4))
      let marsExtra = parseFloat((timeLeft / 1.88).toPrecision(4))
      let jupiterExtra = parseFloat((timeLeft / 11.86).toPrecision(4))
      this.extra.push(earthExtra, mercuryExtra, venusExtra, marsExtra, jupiterExtra)
      return this.extra;
    }
  }
};