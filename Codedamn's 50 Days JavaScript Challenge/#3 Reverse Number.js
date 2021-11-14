// Reverse a set of Numbers

const num = 3849;

function reversedNum(num) {
    return (
      parseFloat(
        num
          .toString()
          .split('')
          .reverse()
          .join('')
      ) * Math.sign(num)
    )       
    
  }
reversedNum(num);  

console.log(`Reversed integer is: ${reversedNum(3849)}`);
console.log(`Reversed integer is: ${reversedNum(2222)}`);
console.log(`Reversed integer is: ${reversedNum(1002)}`);


