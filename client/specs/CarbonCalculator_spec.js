const assert = require('assert');
const CarbonCalculator = require('../src/helpers/CarbonCalculator.js');




//
// {drive_car: true,
// fly_plane: true,
// renewable_energy: true,
// vegan: false,
// cold_water_wash: false,
// recycle: false,
// tumble_dryer: true,
// energy_saving_lightbulbs: false
// },



describe('CarbonCalculator', function() {

  let score;

  beforeEach(function() {

    const footprint = {
      drive_car: false,
      fly_plane: false,
      renewable_energy: false,
      vegan: true,
      cold_water_wash: true,
      recycle: true,
      tumble_dryer: false,
      energy_saving_lightbulbs: true
    };

  })



    // footprint1 = new CarbonCalculator(footprint);
    // footprint2 = new CarbonCalculator(true, true, true, false, false, false, true, false);
    it('should be able get total score', function(){
      score = new CarbonCalculator(this.footprint);
      assert.strictEqual(score, 7);
    });





});
