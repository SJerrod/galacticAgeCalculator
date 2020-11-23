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
    expect(currentAge.lifeExpectancy()).toEqual(true)
    expect(test1.lifeExpectancy()).toEqual(true)
    expect(test2.lifeExpectancy()).toEqual(true)
    expect(test3.lifeExpectancy()).toEqual(true)
    expect(test4.lifeExpectancy()).toEqual(true)
    expect(test5.lifeExpectancy()).toEqual(true)
    expect(test6.lifeExpectancy()).toEqual(true)
    expect(test7.lifeExpectancy()).toEqual(true)
    expect(test8.lifeExpectancy()).toEqual(true)
    expect(test9.lifeExpectancy()).toEqual(true)
    expect(test10.lifeExpectancy()).toEqual(true)
    expect(test11.lifeExpectancy()).toEqual(true)
    expect(test12.lifeExpectancy()).toEqual(true)
  })
});
