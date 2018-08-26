const pizzaapi = require('dominos')

pizzaapi.Util.findNearbyStores(
  '4005',
  'all',
  storeData => console.log('storeData: ', storeData)
)