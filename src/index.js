import dataJSON from './MOCK_DATA.json' assert { type: "json" };
import uniqueRandomArray from 'unique-random-array'

export const API={
  data:dataJSON,
  random: uniqueRandomArray(dataJSON)
}

//console.log(API.data)
//console.log("------")
console.log((uniqueRandomArray(API.data)()))