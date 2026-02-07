// Recursion is basically a function calling itself with a smaller version of the problem with the goal of solving the entire problem finally
const calculateFactorial = (number)=> {
    if(number === 1) return 1 // base case
    return number * calculateFactorial(number-1) // recursive case
}

console.log(calculateFactorial(5))

function sum(n) {
  if (n === 0) return 0 // base case;
  const result = n + sum(n - 1) // recurse case;
  return result;
}
/**
 * 5 + sum(4) = 15
 * 4 + sum(3) = 10
 * 3 + sum(2) = 6
 * 2 + sum(1) = 3
 * 1 + sum(0) = 1
 * 
 */

function reverseAString(name){
if(name.length === 1) return name
const lastChar = name[name.length - 1]
return lastChar + reverseAString(name.slice(0,-1))
}


console.log(reverseAString("mophat"))