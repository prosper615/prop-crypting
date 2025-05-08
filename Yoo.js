




import { getrandomnumbers } from "./GenerateRandom/RandomNumber.js"


import { mersenneprime, mersenneprime1, lowerchoosenmerseene,lowerchoosenmerseene1 } from "./GenerateRandom/RandomNumber.js"



// Am gonna use this as salt incase i extend to trying to implement pbkd like bycrypt
import { HashRandomNumber } from "./GenerateRandom/HashRandomNumber.js"


import { tohex } from "./Padding/Paddings.js"


import { divideinputs } from "./Padding/DivideintoTwo.js"

import { eightbitdivide } from "./Padding/Xl.js"

import { blowfishing } from "./BlowFishing/blowfishalgo.js"















const TheplaintextInput  = document.getElementById("TheplaintextInput")










function checkyourpadding(){


    submitInput.addEventListener("click",  async ()=> {
  
      let theInputValue = TheplaintextInput.value

// Get the hex value the user input
 let thewordandpadding =  tohex(theInputValue )


 // Extracting the left 32 bit half of the user input
 
 let extracthalf = divideinputs(thewordandpadding)

let left32bit = extracthalf.the32bit


    console.log(thewordandpadding)

    console.log(left32bit )


    const blowfished = document.getElementById("blowfished")

    blowfished.textContent = blowfishing()


    console.log( blowfishing( ))




  
    })
  
}



  document.addEventListener('DOMContentLoaded', ()=>{ 

// The function below returns the word + it's padding

      checkyourpadding()

    


    
});





const seerandom = getrandomnumbers( mersenneprime1,  lowerchoosenmerseene1 )


 HashRandomNumber(seerandom).then(hashed=> {console.log(hashed)})



 















