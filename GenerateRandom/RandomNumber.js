



// Here am generating the random number i would use for salting
// it would be the range of a lower and higher mersenne prime


 export const mersenneprime = 2n ** 127n - 1n

 export const mersenneprime1 = parseInt(mersenneprime.toString())


 export const lowerchoosenmerseene = 2n ** 61n - 1n

  export const lowerchoosenmerseene1 =  parseInt(lowerchoosenmerseene.toString())



  export function getrandomnumbers(minnumber , maxnumber ) {


return Math.floor(Math.random( ) * ( maxnumber - minnumber + 1)) + minnumber


}


// console.log( getrandomnumbers( mersenneprime1,  lowerchoosenmerseene1)) 