// This will return a Random Number from Given Range

function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
  return Math.random() * (rangeEnd - rangeStart) + rangeStart;
}
console.log(`My random number: ${randomNumberGeneratorInRange(10, 50)}`);
console.log(`My random number: ${randomNumberGeneratorInRange(100, 200)}`);
