// This will reverse a string

const str = "JavaScript is awesome"

function reverseAString(str) {
  //Spliting String into an array
  let splitStr = str.split("");

  //Reversing the array
  let reverseArray = splitStr.reverse();

  //Joining the array
  let joinArray = reverseArray.join("");
  return joinArray;
}
reverseAString(str);


console.log(`Reversed string is: ${reverseAString(str)}`)
