import { choiceFunc, removeItems } from './helpers'
import fruits from './foods'

const randomFruit = choiceFunc(fruits)

console.log(`Id like a ${randomFruit}, please`)
console.log(`Here you go ${randomFruit}`)
console.log(`Delicious, may I have another`)

const newArrayNum = removeItems(fruits, randomFruit).length

console.log(`I am sorry, we're out. We have ${newArrayNum} left`)
