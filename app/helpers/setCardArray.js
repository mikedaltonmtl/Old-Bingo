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
const randomInteger = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * We need to return an array containing the number of tasks demanded,
 * plus any empty tasks to ensure that the card is square.
 *
 * First we'll add all of the elements from the settings into the cardArray.
 * If we have too many elements, we'll randomize the order and cut the array.
 * If we need extra elements, we'll add more climbs first, then duplicate colours,
 * exercises & lastly intros.
 * Next, we'll randomize the order of the array
 * Lastly, we'll add any empty tasks that we need to make up the numbers, and return it.
 */
const setCardArray = function(nbTasks, colours, intros, exercises, climbRange) {

  const cardArray = [];

  if (colours.length > 0) {
    cardArray.push(...colours);
  }

  if (intros) {
    cardArray.push({ content: 'All the intros', type: 'intros' });
  }

  if (exercises.length > 0) {
    cardArray.push(...exercises);
  }
  console.log('cardArray.length b4 climbs', cardArray.length);

  /////////////////////////////////////////////////////////////////
  // Maybe we need to use a SET to make sure no duplicate climbs?
  /////////////////////////////////////////////////////////////////

  // If the card is already full, add 5 climbs by default
  if (climbRange.length > 0 && cardArray.length >= nbTasks) {
    for (let i = 0; i < 5; i++) {
      const difficulty = randomInteger(climbRange[0], climbRange[1]);
      cardArray.push({content: difficulty, type: 'climb'});
    }
  // else fill the remaining tasks with climbs
  } else if (climbRange.length > 0 && cardArray.length < nbTasks) {
    while (cardArray.length < nbTasks) {
      const difficulty = randomInteger(climbRange[0], climbRange[1]);
      cardArray.push({content: difficulty, type: 'climb'});
    }
  }
  console.log('cardArray.length after', cardArray.length);


  return cardArray;
};

const nbRequestedTasks = 16;

const testColours = ['blue', 'red', 'black', 'white', 'purple', 'yellow'];
const testColoursShort = [];

const testExercises = ['sit-ups', 'push-ups', 'squats'];
const testExercisesLong = ['sit-ups', 'push-ups', 'squats', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

const testClimbRange = [4, 10];
// const setCardArray = function(nbTasks, colours, intros, exercises, climbRange)
const result = setCardArray(nbRequestedTasks, testColours, true, testExercises, testClimbRange);

console.log(result);