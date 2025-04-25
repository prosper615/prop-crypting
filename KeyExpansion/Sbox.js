

// Here am implementing the 4 S-box array with  256 32 bits entries


 
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
  
  
  
  