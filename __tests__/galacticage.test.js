import { GalacticAge } from './../src/js/galacticage.js';

describe('GalacticAge', ()=> {
  let currentAge;

  beforeEach(()=> {
    currentAge= new GalacticAge(28)
  });

  test('should return users earthAge', ()=> {
    expect(currentAge.earthAge).toEqual(28);
  });

  test('should return users mercuryAge', ()=> {
    expect(currentAge.calcMercury()).toEqual(116.7);
  })

  test('should return users venusAge', ()=> {
    expect(currentAge.calcVenus()).toEqual(45.16);
  })

  test('should return users marsAge', ()=> {
    expect(currentAge.calcMars()).toEqual(14.89)
  })

  test('should return users jupiterAge', ()=> {
    expect(currentAge.calcJupiter()).toEqual(2.361)
  })
});