import { GalacticAge } from './../src/js/galacticage.js';

describe('GalacticAge', ()=> {
  let currentAge;

  beforeEach(()=> {
    currentAge= new GalacticAge(28)
  });

  test('should return users earthAge', ()=> {
    expect(currentAge.earthAge).toEqual(0);
  });
});