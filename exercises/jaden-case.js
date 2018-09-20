'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

 // Your code :

 function jadenCase (arg1) {
    let a = arg1.split(" ")
    let b = []
    for (var i=0; i<a.length; i++) {
        b[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1)
    } 
        return(b.join(" "))
}

 

//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof jadenCase, 'function')
assert.strictEqual(jadenCase("salut micka tu vas bien"), "Salut Micka Tu Vas Bien")

// End of tests */
