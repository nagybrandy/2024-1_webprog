import {add} from './math.js'
import cowsay from "cowsay"
console.log('Haliiii!!')
console.log(add(3,5))
console.log(cowsay.say({
    text: 'Hello world!',
    e: '^^', // eyes
    T: 'U',
    r: true, // random mode - use a random cow.
}))