export class GalacticAge {
  constructor(earthAge, sex, continent) {
    this.earthAge = earthAge;
    this.sex = sex;
    this.continent = continent;
    this.earthRemain = 0;
    this.earthExtra = 0
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

  // lifeExpectancy(earthAge, sex, continent) {
  //   switch (this.sex) {
  //     case ("Male"):
  //       if (this.continent === "North-America") {
  //         let lifeExpect = 77;
  //         if (this.earthAge <= lifeExpect) {
  //           let timeLeft= lifeExpect - this.earthAge;
  //           return this.earthRemain = timeLeft;
  //         } else {
  //           let timeLeft = this.earthAge - lifeExpect;
  //           return this.earthExtra = timeLeft;
  //         }
  //       }
  //       break;
  //     case ("Female"):
  //       break;
  //   }
  // }

  // lifeExpectancy(earthAge, sex, continent) {
  //   switch (this.sex) {
  //     case ("Male"):
  //       switch (this.continent) {
  //         case ("Africa"):
  //           let lifeExpect = 62;
  //           if (this.earthAge <= lifeExpect) {
  //             let timeLeft= lifeExpect - this.earthAge;
  //             return this.earthRemain = timeLeft;
  //           } else {
  //             let timeLeft = this.earthAge - lifeExpect;
  //             return this.earthExtra = timeLeft;
  //           }
  //           break;

  //         case ("Asia"):
  //           let lifeExpect = 76;
  //           if (this.earthAge <= lifeExpect) {
  //             let timeLeft= lifeExpect - this.earthAge;
  //             return this.earthRemain = timeLeft;
  //           } else {
  //             let timeLeft = this.earthAge - lifeExpect;
  //             return this.earthExtra = timeLeft;
  //           }
  //           break;
  //         case ("Australia"):
  //           let lifeExpect = 82;
  //           if (this.earthAge <= lifeExpect) {
  //             let timeLeft= lifeExpect - this.earthAge;
  //             return this.earthRemain = timeLeft;
  //           } else {
  //             let timeLeft = this.earthAge - lifeExpect;
  //             return this.earthExtra = timeLeft;
  //           }
  //           break;
  //         case ("Europe"):
  //           let lifeExpect = 79;
  //           if (this.earthAge <= lifeExpect) {
  //             let timeLeft= lifeExpect - this.earthAge;
  //             return this.earthRemain = timeLeft;
  //           } else {
  //             let timeLeft = this.earthAge - lifeExpect;
  //             return this.earthExtra = timeLeft;
  //           }
  //           break;
  //         case ("North-America"):
  //           let lifeExpect = 77;
  //           if (this.earthAge <= lifeExpect) {
  //             let timeLeft= lifeExpect - this.earthAge;
  //             return this.earthRemain = timeLeft;
  //           } else {
  //             let timeLeft = this.earthAge - lifeExpect;
  //             return this.earthExtra = timeLeft;
  //           }
  //           break;
  //         case ("South-America"):
  //           let lifeExpect = 72;
  //           if (this.earthAge <= lifeExpect) {
  //             let timeLeft= lifeExpect - this.earthAge;
  //             return this.earthRemain = timeLeft;
  //           } else {
  //             let timeLeft = this.earthAge - lifeExpect;
  //             return this.earthExtra = timeLeft;
  //           }
  //         break;
  //       }
  //       break;
  //     case ("Female"):
  //       break;
  //   }
  // }

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
        break;
    }
    if (this.earthAge <= lifeExpect) {
      let timeLeft= lifeExpect - this.earthAge;
      return this.earthRemain = timeLeft;
    } else {
      let timeLeft = this.earthAge - lifeExpect;
      return this.earthExtra = timeLeft;
    }
  }

};