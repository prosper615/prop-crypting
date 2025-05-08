







import { divideinputs } from "../Padding/DivideintoTwo.js";

import { Parrays } from "../KeyExpansion/Parrays.js";


import { roundingfunction } from "./RoundFunction.js";

import { tohex } from "../Padding/Paddings.js";

import { eightbitdivide } from "../Padding/Xl.js";





const TheplaintextInput  = document.getElementById("TheplaintextInput")


export function blowfishing( ) {


     let theInputValue = TheplaintextInput.value

// Get the hex value the user input
 let thewordandpadding =  tohex(theInputValue )



 // Extracting the left 32 bit half of the user input
 
 let extracthalf = divideinputs(thewordandpadding)

  let templeft = extracthalf.the32bit

  let tempright = extracthalf.theother32bit

    let initail_index = 0;



    // would be used to hold the final result  
    let concatleft_and_right;

    while (initail_index < 16) {

       templeft =  templeft ^ Parrays[initail_index]; 

        let rounded_function = roundingfunction();

        tempright = rounded_function ^ tempright;

        // Swaping values, except on the last round i.e 16th round 
        if (initail_index < 15) {

            let tempholder = templeft;

           templeft  = tempright;

            tempright = tempholder;
        }


        initail_index++;

    }

    // Final steps after all round
    tempright = tempright ^ Parrays[16]
     
    templeft = templeft ^ Parrays[17]


   
    concatleft_and_right = templeft.toString(16).padStart(8, '0') + tempright.toString(16).padStart(8, '0');

//    concatleft_and_right = templeft + tempright 


    return concatleft_and_right


}



