


// According to the blowfish algorithm the 64 bit input would be divided into two

// 32 bit halves



// Now implementing the divsion of the inputs


 export function Divideinputs ( TheacceptedInput){

if( TheacceptedInput.length > 16 ){

const theslice = TheacceptedInput.slice( 0, 16)


const firsthalf = theslice.slice(0,8)

const secondhalf = theslice.slice(8)

return {   the32bit : firsthalf , theother32bit: secondhalf}



}




}


