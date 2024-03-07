import dataJSON from './MOCK_DATA.json' assert { type: "json" };
import dataJSON2 from './starwars-names.json' assert { type: "json" };

import uniqueRandomArray from 'unique-random-array'

export const API={
  data:dataJSON,
  random: uniqueRandomArray(dataJSON)
}

export const starwarsNames={
  data:dataJSON2,
  random: uniqueRandomArray(dataJSON2)
}

//console.log(API.data)
//console.log("------")
//console.log((uniqueRandomArray(API.data)()))
//export default API

export default starwarsNames;