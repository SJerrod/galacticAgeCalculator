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
    expect(currentAge.lifeExpectancy()).toEqual(true)
  })
});