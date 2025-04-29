


// Xl is what is usually used to reference the left or first 32 bits of the 64 bits original input

import { Divideinputs } from "./DivideintoTwo";


const extractleftbit = Divideinputs("I love crytography")

 export const Xl = extractleftbit.the32bit


// The Xl would be divided into four 8 bits respectively

// I would implement this using the xor operation




  const  A = (Xl >> 24) & 0xFF

 const B = (Xl >> 16) & 0xFF

 const  C = (Xl >> 8) & 0xFF

 const D = Xl & 0xFF

