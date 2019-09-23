/* eslint-env jest */

const fuelAPI = require('../api/fuel_api')

describe('#fuelAPIData() using API', () => {
  const expected = [{"fuel":"biomass"}];
  it('Should load api data', () => {
    return fuelAPI.fuelAPIData()
      .then(data => {
        expect(data).toBeDefined()
        expect(data.entity.data.from).not.toBeNull();
      })
  })
})
// Test for failing
describe('#fuelAPIData() using API for FAIL', () => {
  const expected = [{ "fuel": "biomass" }];
  it('Should Fail this test', () => {
    return fuelAPI.fuelAPIData()
      .then(data => {
        expect(data).toBeDefined()
        expect(data.entity.data.from).toBeNull();
      })
  })
})