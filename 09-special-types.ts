// Special Type - null
let a: null;

a = null

let b: null | string

b = "Hello"   // changed from "Hi"
b = null

// Special Type - undefined
let c: undefined;

c = undefined

let d: undefined | string

d = "World"   // changed from "Hi"
d = undefined

console.log("a:", a)
console.log("b:", b)
console.log("c:", c)
console.log("d:", d)