const exampleDinosaurData = require("./data/dinosaurs");
/// Program your functions below //

// * getLongestDinosaur()
// * ---------------------
// * Returns an object with the longest dinosaur from the list. Converts from meters to feet.
// *
// * NOTE: To convert from meters to feet, multiply the meters by `3.281`.
// *
// * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
// * @returns {Object} An object where the key is the name of the dinosaur and the value is the height of the dinosaur in feet.
// *
// * EXAMPLE:
// *  getLongestDinosaur(dinosaurs);
// *  //> { Brachiosaurus: 98.43 }
// */
function getLongestDinosaur(dinosaurs) {
  let longestHeight = 0;
  let longestDinoName;
  
  for (let i = 0; i < dinosaurs.length; i++) {
    let dinoHeight = dinosaurs[i].lengthInMeters * 3.281;
    let dinoName = dinosaurs[i].name;

    if (dinoHeight > longestHeight) {
      longestHeight = dinoHeight;
      longestDinoName = dinoName;
    } 
    else {
      return {};
    }
  }
  return {[longestDinoName] : longestHeight}
}

console.log(getLongestDinosaur(exampleDinosaurData))

// Michael
function getLongestDinosaur(dinosaurs) {
  
}

// Jean
/ function getLongestDinosaur(dinosaurs) {
    let longestDino = dinosaurs[0];
    for (let dino of dinosaurs) {
      if (dino.lengthInMeters > longestDino.lengthInMeters) {
        longestDino = dino;
      }
    }
    let lengthInFeet = longestDino.lengthInMeters * 3.281;
    let result = {};
    result[longestDino.name]  = lengthInFeet;
    return result;
  }
  // Jean
  function getLongestDinosaur(dinosaurs) {
    let lengths = dinosaurs.map(dino => dino.lengthInMeters);
    let maxLength = Math.max(...lengths);
    let longestDino = dinosaurs.find(dino => dino.lengthInMeters === maxLength);
    let lengthInFeet = maxLength * 3.281;
    let result = {};
    result[longestDino.name] = lengthInFeet;
    return result;