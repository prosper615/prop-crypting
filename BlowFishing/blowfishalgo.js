


/*

Blowfish uses a 16-round Feistel network and operates on 64-bit blocks.

Each round uses a simple structure involving only:

3 XOR operations

2 additions

4 S-box lookups

 Encryption Steps
Split the 64-bit plaintext into two 32-bit halves:

L0 (left half), R0 (right half)

For rounds 1 to 16 (i = 1 to 16):

Li = Li–1 ⊕ Pi

Ri = f(Li) ⊕ Ri–1

Swap Li and Ri

Undo the final swap:

Swap L16 and R16

Final XOR steps:

R17 = R16 ⊕ P17

L17 = R17 ⊕ P18

Combine L17 and R17 to get the 64-bit ciphertext output.



*/






// Now gonna rewrite the blowfish algorithm function i.e delete this stupid one

import { divideinputs } from "../Padding/DivideintoTwo.js";

import { Parrays } from "../KeyExpansion/Parrays.js";


import { roundingfunction } from "./RoundFunction.js";




   export function blowfishing (templeft , tempright  ){


// Am acessing the already divided input in the   ../Padding/DivideintoTwo file path
// const acessleftandright = divideinputs()

// const acessleft = acessleftandright.the32bit

// const acessright = acessleftandright.theother32bit

let lefttemp = templeft

let righttemp = tempright

let holder = []

let initail_index = 0

// while (initail_index < Parrays.length) {



lefttemp =  lefttemp ^ Parrays[initail_index]

let rounded_function = roundingfunction()

righttemp = rounded_function ^ righttemp


let tempholder = lefttemp

// Trying to swap their values 

lefttemp = righttemp

righttemp = tempholder

initail_index++













    
// }


return Parrays.length




}

