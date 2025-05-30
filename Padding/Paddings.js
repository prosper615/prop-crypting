


const ThePlaintextLenght = document.getElementById("TheplaintextInput")




/**
 * Calculates the padding size needed for a given data length.
 * @param dataLength The length of the data.
 * @returns The size of the padding needed.
 */





export const blocksize  = 64    // since am using blowfish algorithm, the default blocksize is 64


  export function calculatepaddingsize (datalenght) {


// const blocksize : number = 64    // since am using blowfish algorithm, the default blocksize is 64

const paddingSize = blocksize - ( datalenght %  blocksize)

return paddingSize


}


 


// This function is to pad the input with the actual hex value, also converting to hex value

 export function tohex ( wordtohex) {

  const sizeofblock = 64


const hexvalue = Array.from(wordtohex).map( hex => hex.charCodeAt(0).toString(16).padStart( 2 , "0" )).join("")




const hexprefix = "0x"


const check64bit = hexvalue.length


const paddit = sizeofblock - ( check64bit %  sizeofblock)


/**
 * Applies PKCS#7 padding scheme to fill the word to a complete 64-bit length.
 * The padding size is determined by the number of bytes needed to reach the 64-bit boundary.
 * The padding bytes are filled with the value of the padding size.
 
 */

const hexvalueofpadit = paddit.toString(16).padStart( 2, "0")


// Now a new array that would be used to fill up to 64 bits i.e the padding

const fillwithpad = new Array(paddit).fill(hexvalueofpadit)


// Now joining it with the initial word, which means am concatenating the padding with the original word

const wordandpadding = [ ...hexvalue, ...fillwithpad]




  return    hexprefix +  hexvalue  
 





}







 


export function numberofblocks ( datalenght){


  return   Math.ceil( datalenght / blocksize )


}





// correcting... , the words should be represented in binary and not in hex which had caused returning of minus value 
// for the previous version of my implementation of blowfish algo..



    export function tobinary( value_tobinary){


  const encodeit = new  TextEncoder

  const beingencoded = encodeit.encode(value_tobinary)

  const first_tounit = Array.from( new Uint8Array(beingencoded))

   const show_thebinary =  first_tounit.map(binaring => binaring.toString(2).padStart(8,"0" ) ).join("")



  return show_thebinary





}







export function tobinary2(value_tobinary2) {

  // Remove any optional '0x' prefix and ensure even length

const hex = value_tobinary2.replace(/^0x/, '').padStart(value_tobinary2.length + value_tobinary2.length % 2, '0');

  // Convert hex pairs to binary

  const binaryString = hex.match(/.{2}/g).map(byte => parseInt(byte, 16).toString(2).padStart(8, '0')).join('');

  return binaryString;
}





