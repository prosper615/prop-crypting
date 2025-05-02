


// Xl is what is usually used to reference the left or first 32 bits of the 64 bits original input


// The Xl would be divided into four 8 bits respectively

// I would implement this using the xor operation

import { divideinputs } from "./DivideintoTwo.js";

import { tohex } from "./Paddings.js";




const TheplaintextInput  = document.getElementById("TheplaintextInput")
 


 // Now implementing the division of the leftside of  64 bit input as a function

export  function eightbitdivide( ){


  let theInputValue = TheplaintextInput.value

// Get the hex value the user input
 let thewordandpadding =  tohex(theInputValue )


  let into8bits = divideinputs(thewordandpadding)


const Xl2 = into8bits.the32bit

const  A1 = (Xl2 >> 24) & 0xFF

const B1 = (Xl2 >> 16) & 0xFF

const  C1 = (Xl2 >> 8) & 0xFF

const D1 = Xl2 & 0xFF

return {  one: A1 , two: B1 , three: C1, four: D1}



}






