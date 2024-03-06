const uniqueRandomArray =require('unique-random-array')

const dataJSON=require('./MOCK_DATA.json')

//console.log(data)
module.exports = {
  data:dataJSON,
  random:uniqueRandomArray(dataJSON)
}