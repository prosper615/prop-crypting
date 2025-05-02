

// Here am implementing the 4 S-box array with  256 32 bits entries




/**
 * TODO: 
  
 * The size of the S-box (256 entries, 32-bit each) matches the Blowfish design.
 
 * I'm using Math.random(), which is not cryptographically secure, not dependent on the key and also
 
 * produces different S-boxes every time, regardless of the key.
 
 * I would improve on the code as time goes on as this is just for fun.
 
 */

 
 export  function generateSBox() {

    const sbox = new Uint32Array(256);

    for (let i = 0; i < 256; i++) {
      
      sbox[i] = Math.floor(Math.random() * 2 ** 32);
    }
    return sbox;

  }
  
  // Create four S-boxes

 export  const S1 = generateSBox();

 export  const S2 = generateSBox();

 export const S3 = generateSBox();

export  const S4 = generateSBox();
  
  
  
  