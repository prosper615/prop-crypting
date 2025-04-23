


const ThePlaintextLenght = document.getElementById("TheplaintextInput")




/**
 * Calculates the padding size needed for a given data length.
 * @param dataLength The length of the data.
 * @returns The size of the padding needed.
 */




const blocksize  = 64    // since am using blowfish algorithm, the default blocksize is 64


 function calculatepaddingsize (datalenght) {


// const blocksize : number = 64    // since am using blowfish algorithm, the default blocksize is 64

const paddingSize = blocksize - ( datalenght %  blocksize)

return paddingSize


}



console.log(calculatepaddingsize(20) )    // tested





// calculating the number of blocks required

let lengthoftext  = ThePlaintextLenght.value.replace(/ /g, "").length;


const numberofblocks =  lengthoftext / blocksize


console.log( numberofblocks)    // tested, nothing actually happens because there is no event listener to get the plaintext input