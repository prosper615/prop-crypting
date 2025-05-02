



/**
 * Implements the Blowfish round function F(Xl).
 *
 * This function represents the F(Xl) component in the Feistel network of the Blowfish cipher.
 * F(Xl) is responsible for introducing both confusion and diffusion during the encryption process.
 *
 * Recall from ../Padding/Xl: Xl is the left 32-bit half obtained by splitting the 64-bit input block into two halves.
 *
 * The F(Xl) function performs the following computation:
 *     F(Xl) = ((S1[A1] + S2[B1]) mod 2^32) XOR S3[C1] + S4[D1] ) mod 2^32
 *
 * - A1, B1, C1, D1 are 8-bit segments derived from Xl.
 * - S1 to S4 are substitution boxes (S-boxes) defined in ./KeyExpansion/Sbox.js.
 *
 * This function is a core part of each Feistel round in Blowfish.
 * 
 */


import { S1, S2 ,S3, S4 } from "../KeyExpansion/Sbox.js";

import { eightbitdivide } from "../Padding/Xl.js";





// Let me make it work before thinking of refactoring the code to be better, lol


 export function  roundingfunction (   ){


const getthedividedvalues = eightbitdivide()


const thes1 = getthedividedvalues.one

const thes2 = getthedividedvalues.two

const thes3 = getthedividedvalues.three

const thes4 = getthedividedvalues.four

const S1operation = S1.map( mapper => mapper * thes1)

const S2operation = S2.map( mapper => mapper * thes2)

const S3operation = S3.map( mapper => mapper * thes3)

const S4operation = S4.map( mapper => mapper * thes4)



// Now implementing the addition of S1 and S2 and also S3 and S4 respectively

// Remember as specified earlier S1[A1] + S2[B1]  and S3[C1] + S4[D1]


const s1ans2 = [...S1operation, ...S2operation].reduce( (reduc , accu)=>{

return reduc + accu

}, 0)



const s3ands4 =  [...S3operation, ...S4operation].reduce( (reduc , accu)=>{

    return reduc + accu
    
    }, 0)



// Now implementing this part of the process : S1[A1] + S2[B1]) mod 2^32 


const modofs1ands2 = s1ans2 % 2**32 


 // Then performing the Xor operation

 const XorBoth = modofs1ands2 ^ s3ands4

 const finaloperation = XorBoth % 2**32



return finaloperation




}



