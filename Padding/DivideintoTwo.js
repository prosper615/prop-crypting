


// According to the blowfish algorithm the 64 bit input would be divided into two32 bit halves




// Now implementing the divsion of the inputs

 export  function divideinputs ( TheacceptedInput) {


// const theslice = TheacceptedInput.slice( 0, 16)


// Due to the fact i prefixed Ox to the hex, i would return 10 instead of 8( for now) for it to be 32 bits 

const theslice = TheacceptedInput.slice( 0, 18)

const firsthalf = theslice.slice(0,10)

const secondhalf = theslice.slice(10)


// const firsthalf = theslice.slice(0,8)

// const secondhalf = theslice.slice(8)


return {   the32bit : firsthalf , theother32bit: secondhalf}







}


