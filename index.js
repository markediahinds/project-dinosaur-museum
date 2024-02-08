const exampleDinosaurData = require("./data/dinosaurs");
const exampleRoomData = require("./data/rooms");

// getRoomByDinosaurName()
//  * ---------------------
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
  let dinoRoom = '';
  let errorMes = `Dinosaur with name ${dinosaurName} cannot be found.`
  let dinoName;
  let dinoId;
  
    for (let i = 0; i < dinosaurs.length; i++) {
      if (dinosaurName === dinosaurs[i].name) {
        dinoId = dinosaurs[i].dinosaurId
        return `Dinosaur with name ${dinosaurName} cannot be found.`
      }
    }

    for (let j = 0; j < rooms.length; j++) {
      for (let k = 0; k < rooms[j].dinosaurs.length; k++)
      if (rooms[j].dinosaurs.includes(dinoId)) {
        return rooms[j].name
      }
    }
  
  //   const findId = rooms.find((ID) => ID.dinosaurs.includes(dinoId));
  // console.log(findId.name);

}

console.log(getRoomByDinosaurName(exampleDinosaurData, exampleRoomData, "Tyrannosaurus"))

