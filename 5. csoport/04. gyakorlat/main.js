import add from './math.js'
import cowsay from "cowsay"

console.log('Hello!!!!')
console.log(add(3,4))
console.log(cowsay.say({
    text: 'Hello world!',
    e: 'xx', // eyes
    r: true, // random mode - use a random cow.
}))