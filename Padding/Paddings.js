


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


 
  export function numberofblocks ( datalenght){


     return   Math.ceil( datalenght / blocksize )


}







// This function is to pad the input with the actual hex value, also converting to hex value

 export function tohex ( wordtohex) {

  const sizeofblock = 64


const hexvalue = Array.from(wordtohex).map( hex => hex.charCodeAt(0).toString(16).padStart( 2 , "0" )).join("")


const check64bit = hexvalue.length


const paddit = sizeofblock - ( check64bit %  sizeofblock)







return paddit







}




// const me = "I love software engineering "


// const toseehex = [...me].map( b=> b.charCodeAt(0).toString(16).padStart( 2 , "0" )).join("")


// console.log( toseehex)




/*



function padTo64BitBlocks(input) {
  const cleaned = input.replace(/\s/g, ""); // Remove spaces
  const bytes = new TextEncoder().encode(cleaned); // Convert to bytes (UTF-8)
  const blockSize = 8;

  // Calculate padding
  const paddingNeeded = blockSize - (bytes.length % blockSize);
  const padded = new Uint8Array(bytes.length + paddingNeeded);

  padded.set(bytes);
  padded.fill(paddingNeeded, bytes.length); // PKCS#5/7-style padding

  return padded;
}

const input = "hello this is more than 64 bits";
const paddedBytes = padTo64BitBlocks(input);

console.log("Total bytes (after padding):", paddedBytes.length);
console.log("Number of 64-bit blocks:", paddedBytes.length / 8);



*/