import { GalacticAge } from './../src/js/galacticage.js';

describe('GalacticAge', ()=> {
  let currentAge;

  beforeEach(()=> {
    currentAge= new GalacticAge(85, "Male", "South-America")
  });

  test('should return users earthAge', ()=> {
    expect(currentAge.earthAge).toEqual(85);
  });

  test('should return users mercuryAge', ()=> {
    expect(currentAge.calcMercury()).toEqual(354.2);
  })

  test('should return users venusAge', ()=> {
    expect(currentAge.calcVenus()).toEqual(137.1);
  })

  test('should return users marsAge', ()=> {
    expect(currentAge.calcMars()).toEqual(45.21)
  })

  test('should return users jupiterAge', ()=> {
    expect(currentAge.calcJupiter()).toEqual(7.167)
  })

  test('should return users lifeExpectancy', ()=> {
    let test1 = new GalacticAge(30, "Male", "Africa");
    let test2 = new GalacticAge(30, "Male", "Asia");
    let test3 = new GalacticAge(30, "Male", "Australia");
    let test4 = new GalacticAge(30, "Male", "Europe");
    let test5 = new GalacticAge(30, "Male", "North-America");
    let test6 = new GalacticAge(80, "Male", "South-America");
    let test7 = new GalacticAge(30, "Female", "Africa");
    let test8 = new GalacticAge(30, "Female", "Asia");
    let test9 = new GalacticAge(30, "Female", "Australia");
    let test10 = new GalacticAge(30, "Female", "Europe");
    let test11 = new GalacticAge(30, "Female", "North-America");
    let test12 = new GalacticAge(80, "Female", "South-America");
    expect(currentAge.lifeExpectancy()).toEqual([13, 54.17, 20.97, 6.915, 1.096])
    expect(test1.lifeExpectancy()).toEqual([32, 133.3, 51.61, 17.02, 2.698])
    expect(test2.lifeExpectancy()).toEqual([46, 191.7, 74.19, 24.47, 3.879])
    expect(test3.lifeExpectancy()).toEqual([52, 216.7, 83.87, 27.66, 4.384])
    expect(test4.lifeExpectancy()).toEqual([49, 204.2, 79.03, 26.06, 4.132])
    expect(test5.lifeExpectancy()).toEqual([47, 195.8, 75.81, 25, 3.963])
    expect(test6.lifeExpectancy()).toEqual([8, 33.33, 12.9, 4.255, 0.6745])
    expect(test7.lifeExpectancy()).toEqual([35, 145.8, 56.45, 18.62, 2.951])
    expect(test8.lifeExpectancy()).toEqual([50, 208.3, 80.65, 26.6, 4.216])
    expect(test9.lifeExpectancy()).toEqual([55, 229.2, 88.71, 29.26, 4.637])
    expect(test10.lifeExpectancy()).toEqual([54, 225, 87.1, 28.72, 4.553])
    expect(test11.lifeExpectancy()).toEqual([51, 212.5, 82.26, 27.13, 4.3])
    expect(test12.lifeExpectancy()).toEqual([2, 8.333, 3.226, 1.064, 0.1686])
  })
});
