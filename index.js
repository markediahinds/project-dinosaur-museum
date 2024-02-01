const exampleDinosaurData = require("./data/dinosaurs");
/// Program your functions below //

/**
 * getDinosaurDescription()
 * ---------------------
 * Returns a formatted description of a dinosaur. If the dinosaur cannot be found, returns an error message.
 *
 * NOTE: Carefully view the test output and example below to see how the returned string should be formatted.
 *
 * NOTE: The `\n` represents a new line in text.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {string} id - The unique identifier for the dinosaur.
 * @returns {string} A detailed description of the dinosaur.
 *
 * EXAMPLE:
 *  getDinosaurDescription(dinosaurs, "U9vuZmgKwUr");
 *  //> "Xenoceratops (ZEE-no-SEH-ruh-tops)\nXenoceratops had horns and a bony frill with elaborate ornamentation of projections, knobs, and spikes. It lived in the Early Cretaceous period, over 77.5 million years ago."
 *
 *  getDinosaurDescription(dinosaurs, "incorrect-id");
 *  //> "A dinosaur with an ID of 'incorrect-id' cannot be found."
 */
function getDinosaurDescription(dinosaurs, id) {
let dinoName;
let dinoPronunciation;
let dinoInfo;
let dinoPeriod;  
let dinoYear;

  for(let i = 0; i < dinosaurs.length; i++) {
    if (dinosaurs[i].dinosaurId === id) {
      dinoName = dinosaurs[i].name;
      dinoPronunciation = dinosaurs[i].pronunciation;
      dinoInfo = dinosaurs[i].info;
      dinoPeriod = dinosaurs[i].period;
      dinoYear = dinosaurs[i].mya[1];
    
    return `${dinoInfo} ${dinoPronunciation} \n It lived in the ${dinoPeriod}, over ${dinoYear.length === 1 ? dinoYear[0] : dinomya[1]} million years ago.`
    }
  }
}


console.log(getDinosaurDescription(exampleDinosaurData, 'U9vuZmgKwUr'))
  
// checking if the dinosaur id = dinosaur ID
// string concatnate 
// } else  {    
  //   return `A dinosaur with an ID of 'incorrect-id' cannot be found.`
  // }

  // if (dinosaurs[i].dinosaurId !== id) return `A dinosaur with an ID of 'incorrect-id' cannot be found.
  // in condition check if it's 1 or 2, check length  