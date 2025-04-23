


// Now its time to  implement the hash of the raandomly choosen large prime which would be used as the salt

// This is just my implementation






 export  async function HashRandomNumber( TobeHashed){

try {
    

const EncodeIt = new TextEncoder()

const TheEncoded = EncodeIt.encode(TobeHashed)


const Hasher = await window.crypto.subtle.digest("SHA-256" , TheEncoded)



const TurnToUnit = Array.from( new Uint8Array ( Hasher))

const ThenMap = TurnToUnit.map(b =>b.toString(16).padStart(2, "0")).join( "")

return ThenMap

} catch (error) {

    console.log(error)
    
}


}