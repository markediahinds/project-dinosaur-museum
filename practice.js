const exampleDinosaurData = require("./data/dinosaurs");
/// Program your functions below //

// * 1. Dino getLongestDinosaur()
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

    //

    /**
 * Dino 2. getDinosaurDescription()
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
        dinoYear = dinosaurs[i].mya;
      
      return `${dinoName} (${dinoPronunciation})\n${dinoInfo} It lived in the ${dinoPeriod} period, over ${dinoYear[dinoYear.length-1]} million years ago.`
      }
    }
    return `A dinosaur with an ID of 'incorrect-id' cannot be found.`
  }

  // checking if the dinosaur id = dinosaur ID
// string concatnate 
// } else  {    
  //   return `A dinosaur with an ID of 'incorrect-id' cannot be found.`
  // }

  // if (dinosaurs[i].dinosaurId !== id) return `A dinosaur with an ID of 'incorrect-id' cannot be found.
  // in condition check if it's 1 or 2, check length  

  

  /**
 * Dino 3. getDinosaursAliveMya()
 * ---------------------
 * Returns an array of dinosaurs who were alive at the given `mya` (i.e. "millions of years ago") value. If a `key` is provided, returns the value of that key for each dinosaur alive at that time. Otherwise, returns the ID.
 *
 * If the dinosaur only has a single value for `mya`, allows for the `mya` value to be equal to the given value or one less. For example, if a dinosaur has a `mya` value of `[29]`, the dinosaur's information will be returned if `29` is entered or `28` is entered.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {number} mya - "Millions of years ago."
 * @param {string} key - An optional parameter. If included, for dinosaurs that lived during the `mya` value given, will return the value of the supplied key. Otherwise, returns the ID.
 * @returns {*[]} An array of values, which depend on the key given. The array should only include data of dinosaurs who lived during the given time period.
 *
 * EXAMPLE:
 *  getDinosaursAliveMya(dinosaurs, 150);
 *  //> ["YLtkN9R37", "GGvO1X9Zeh", "BFjjLjea-O", "V53DvdhV2A"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65);
 *  //> ["WHQcpcOj0G"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65, "name");
 *  //> ["Dracorex"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65, "unknown-key");
 *  //> ["WHQcpcOj0G"]
 */
function getDinosaursAliveMya(dinosaurs, mya, key) {
  
}

module.exports = {
  getLongestDinosaur,
  getDinosaurDescription,
  getDinosaursAliveMya,
};
/////////////////////////////////////////////////
//
// Rooms 1. getRoomByDinosaurName()
//  * Return the name of the room where the given dinosaur can be found. If the dinosaur does not exist in the `dinosaurs` list or cannot be found in any room, return an error message that says so.
//  *
//  * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
//  * @param {Object[]} rooms - An array of room objects. See the `data/rooms.js` file for an example of the input.
//  * @param {string} dinosaurName - The name of the dinosaur.
//  * @returns {string} The name of the room where the dinosaur can be found. Alternatively, an error message.
//  *
//  * EXAMPLE:
//  *  getRoomByDinosaurName(dinosaurs, rooms, "Tyrannosaurus");
//  *  //> "Roberts Room"
//  *
//  * EXAMPLE:
//  *  getRoomByDinosaurName(dinosaurs, rooms, "Pterodactyl");
//  *  //> "Dinosaur with name 'Pterodactyl' cannot be found."

function getRoomByDinosaurName(dinosaurs, rooms, dinosaurName) {
  for (let i = 0; i < dinosaurs.length; i++) {
    if (dinosaurName === dinosaurs[i].name) {
      dinoName = dinosaurs[i].name;
      dinoId = dinosaurs[i].dinosaurId;
    }
  }
  if (!dinosaurName === dinoName) {
  return `Dinosaur with name ${dinosaurName} cannot be found.`
  }

    for (let j = 0; j < rooms.length; j++) {
      for (let k = 0; k < rooms[j].dinosaurs.length; k++)
      if (rooms[j].dinosaurs.includes(dinoId)) {
        return rooms[j].name
      }
    }
  
  // Moka Stretch!  My first time using a native array method since Native Array Lab #1
  // const findId = rooms.find((ID) => ID.dinosaurs.includes(dinoId));
  // console.log(findId.name);

}

// PEDAC -- 2/5 -- Coach Joshua: 
// THIS MY DATA, THIS WHAT PROB IS ASKING, DEVISE PLAN BASED ON DATA

// 2/7 Coach Joshua:
// let dinoObj = dinosaurs.find(dino => dino.name === dinosaurName) // dinosaurs = arr of objs AND dino = the object/it's each element within the global structure; can be with or without parentheses
// if(!dinoObj) {
//   return `Dinosaur with name ${dinosaurName} cannot be found.`
// }
const dinoID = dinoObj.dinosaurId;
let foundRoom = rooms.find(room => room.dinosaurs.includes(dinoId))
if (foundRoom) {
  return foundRoom.name {
    else {
      Dinosaur 
    }
  }

}