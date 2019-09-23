import request from './request'

const fuelAPIData = data => request('https://api.carbonintensity.org.uk/generation')

export { fuelAPIData }