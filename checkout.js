




const BLOCK_SIZE = 8; // Blowfish uses 64-bit blocks => 8 bytes

/**
 * Pads the input using PKCS#7 padding.
 * @param {Uint8Array} data - The data to pad.
 * @returns {Uint8Array} - The padded data.
 */
function padData(data) {
    const padLen = BLOCK_SIZE - (data.length % BLOCK_SIZE);
    const padded = new Uint8Array(data.length + padLen);
    padded.set(data);
    padded.fill(padLen, data.length); // Fill with value of padding length
    return padded;
  }
  
  /**
   * Converts a string to a Uint8Array (UTF-8 bytes), pads it, and returns hex.
   * @param {string} input - The input plaintext.
   * @returns {string} - Hex-encoded padded data.
   */
  export function prepareForBlowfish(input) {
    const encoder = new TextEncoder();
    const bytes = encoder.encode(input);
    const padded = padData(bytes);
    return Array.from(padded)
      .map(byte => byte.toString(16).padStart(2, '0'))
      .join('');
  }
  
  /**
   * Calculates how many 8-byte blocks are needed for given byte length.
   */
  export function numberOfBlocks(byteLength) { 
    return Math.ceil(byteLength / BLOCK_SIZE);
  }
  
  
  