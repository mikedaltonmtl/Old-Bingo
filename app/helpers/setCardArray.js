import { convertCircuitToInteger, convertIntegerToCircuit } from "../helpers/convertCircuit";

/**
 * We need to return an array containing the number of tasks demanded,
 * plus any empty tasks to ensure that the card is square.
 *
 * First we'll add all of the elements from the settings into the cardArray.
 * If we have too many elements, we'll randomize the order and cut the array.
 * If we need extra elements, we'll add more climbs first, then duplicate colours,
 * exercises & lastly intros.
 * Next, we'll add any empty tasks that we need to make up the numbers.
 * Lastly, we'll randomize the order of the array and return it.
 */
export default function setCardArray(nbTasks, colours, intros, exercises, minClimb, maxClimb) {

  const cardArray = [];
  while (cardArray.length < nbTasks) {
    if (minClimb > 0) {

    }
    if (colours.length > 0) {
      cardArray.concat(colours);
    }

  }


  // prioritize colours
  if (colours.length > 0) {
    cardArray;
  }

  // calculate how many tasks we have to begin with
  let asks;


  const between = function(length) {
    return Math.floor(Math.random() * length);
  };

  // calculate the size of the grid, for example 11 tasks will need a 16-square grid
  let nbCards = 16;
  if (nbTasks <= 4) {
    nbCards = 4;
  } else if (nbTasks <= 9) {
    nbCards = 9;
  }



  return cardArray;
}