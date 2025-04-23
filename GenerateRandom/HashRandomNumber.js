


// Now its time to  implement the hash of the raandomly choosen large prime which would be used as the salt

// This is just my implementation



 export function HashRandomNumber( TobeHashed){


const EncodeIt = new TextEncoder()


const TheEncoded = EncodeIt.encode(TobeHashed)

return TheEncoded



}