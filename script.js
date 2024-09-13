/**
 * Javascript Control Flow Lab Exercise
 */
// PART ONE
// Variables
const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;
const plantSpace = 0.8;
const weekOne = 20;

//Plant Growth Control Flow

let weeks = 0;
let plants = weekOne * 2 ** weeks;
let capacity = ((plants * plantSpace) / area) * 100;

// Week 1
// ====================================================
if (capacity > 80) {
  console.log("We need to prune the plants");
} else if (capacity >= 50 && capacity <= 80) {
  console.log("We'll keep monitoring the space");
} else {
  console.log("We have more room to plant.");
}

// Week 2
// ====================================================
weeks++;
plants = weekOne * 2 ** weeks;
capacity = ((plants * plantSpace) / area) * 100;

if (capacity > 80) {
  console.log("We need to prune the plants");
} else if (capacity >= 50 && capacity <= 80) {
  console.log("We'll keep monitoring the space");
} else {
  console.log("We have more room to plant.");
}

// Week 3
// ====================================================
weeks++;
plants = weekOne * 2 ** weeks;
capacity = ((plants * plantSpace) / area) * 100;

if (capacity > 80) {
  console.log("We need to prune the plants");
} else if (capacity >= 50 && capacity <= 80) {
  console.log("We'll keep monitoring the space");
} else {
  console.log("We have more room to plant.");
}

// Part one with Loops
// ===================================================
// for (let i = 0; i < 3; i++) {
//    let loopPlants = weekOne * 2 ** weeks;
//   let checkcapacity = ((weekOne * i * plantSpace) / area) * 100;
//   if (checkcapacity > 80) {
//     console.log("We need to prune the plants");
//   } else if (checkcapacity >= 50 && capacity <= 80) {
//     console.log("We'll keep monitoring the space");
//   } else {
//     console.log("We have more room to plant.");
//   }
// }

//PART TWO
// ====================================================
const newPlantCount = 100;
const plantCount = newPlantCount * Math.pow(2, 10);
const totalSpaceNeeded = plantCount * plantSpace;
const garden2Radius = Math.sqrt(totalSpaceNeeded / PI);

console.log(`The new radius of the expanded garden is ${garden2Radius}.`);

//PART THREE
// ====================================================
garden3Capacity = ((newPlantCount * plantSpace) / area) * 100;

try {
  if (garden3Capacity > 80) {
    throw `Error - The amount of space required to hold the new number of plants exceeds the amount of space available. Our capacity is at ${garden3Capacity}%.`;
  } else {
    console.log("Garden capacity is not over 80%.");
  }
} catch (error) {
  console.log(error);
}
