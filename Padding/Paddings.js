


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




// Since 16 hex value is 64 bits 
if(check64bit < 16){

  // returns the padding if less than 64 bits

  return wordandpadding.join("")  

}else{

// return the value if not less than 64 bits

  return  hexvalue 




}



}



 


export function numberofblocks ( datalenght){


  return   Math.ceil( datalenght / blocksize )


}
