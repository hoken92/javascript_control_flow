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

let weeks = 1;
let capacity = ((weekOne * weeks * plantSpace) / area) * 100;

// Week 1
if (capacity > 80) {
  console.log("We need to prune the plants");
} else if (capacity >= 50 && capacity <= 80) {
  console.log("We'll keep monitoring the space");
} else {
  console.log("We have more room to plant.");
}

// Week 2
weeks++;
capacity = ((weekOne * weeks * plantSpace) / area) * 100;

if (capacity > 80) {
  console.log("We need to prune the plants");
} else if (capacity >= 50 && capacity <= 80) {
  console.log("We'll keep monitoring the space");
} else {
  console.log("We have more room to plant.");
}

// Week 3
weeks++;
capacity = ((weekOne * weeks * plantSpace) / area) * 100;

if (capacity > 80) {
  console.log("We need to prune the plants");
} else if (capacity >= 50 && capacity <= 80) {
  console.log("We'll keep monitoring the space");
} else {
  console.log("We have more room to plant.");
}

//PART TWO

const newPlantCount = 100;
const plantCount = newPlantCount * Math.pow(2, 10);
const totalSpaceNeeded = plantCount * plantSpace;
const garden2Radius = Math.sqrt(totalSpaceNeeded / PI);

console.log(`The new radius of the expanded garden is ${garden2Radius}.`);

//PART THREE

garden3Capacity = ((newPlantCount * plantSpace) / area) * 100;

try {
  if (garden3Capacity > 80) {
    throw `Error - The amount of space required to hold the new number of plants exceeds the amount of space available. Our capacity is at ${garden3Capacity}%.`;
  }
} catch (error) {
  console.log(error);
}
