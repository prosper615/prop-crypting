 Project Inspiration
This project was influenced by the paper:

"Description of a New Variable-Length Key, 64-Bit Block Cipher (Blowfish)"
by Bruce Schneier

After reading this paper, I explored implementing a simplified version of the Blowfish cipher to better understand its structure and logic.

⚠️ Important Notes
 P-arrays are precomputed rather than derived from a key schedule, as in the original Blowfish algorithm.

 Randomness is non-cryptographic – I'm using Math.random() for any random values, which is not cryptographically secure.

 No key-based encryption – This version does not implement true key-based encryption; it’s intended for educational or experimental purposes only.
