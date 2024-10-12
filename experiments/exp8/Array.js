const myArray = [1, 2, 3, 4, 5 , 6 , 7];
console.log("Using forEach loop:");
myArray.forEach((element, index) => {
  console.log(`Element at index ${index}: ${element}`);
});
console.log("\nUsing for...of loop:");
for (const [index, element] of myArray.entries()) {
  console.log(`Element at index ${index}: ${element}`);
}
console.log("\nUsing for loop:");
for (let i = 0; i < myArray.length; i++) {
  console.log(`Element at index ${i}: ${myArray[i]}`);
}
