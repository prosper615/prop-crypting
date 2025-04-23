


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