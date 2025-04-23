

import { getrandomnumbers } from "./GenerateRandom/RandomNumber.js"


import { mersenneprime, mersenneprime1, lowerchoosenmerseene,lowerchoosenmerseene1 } from "./GenerateRandom/RandomNumber.js"


import { HashRandomNumber } from "./GenerateRandom/HashRandomNumber.js"


import { blocksize, calculatepaddingsize,  numberofblocks } from "./Padding/Paddings.js"









document.addEventListener('DOMContentLoaded', function() {

    const submitInput = document.getElementById("submitinput");

    const thePlaintextInput = document.getElementById("theplaintextInput");



    submitInput.addEventListener("click", function() {

      const theInputValue = thePlaintextInput.value;

      let lengthOfText = theInputValue.replace(/ /g, "").length;

      console.log(lengthOfText); 


console.log( calculatepaddingsize(lengthOfText))

console.log(numberofblocks(lengthOfText))


    });

  });




const fileinput = document.getElementById("fileinput") 

const displayfile = document.getElementById("displayfile") 


const seerandom = getrandomnumbers( mersenneprime1,  lowerchoosenmerseene1 )


 HashRandomNumber(seerandom).then(hashed=> {console.log(hashed)})


   






















