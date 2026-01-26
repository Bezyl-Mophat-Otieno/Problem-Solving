
// We will be using the sliding window pattern which states that a dynamic window which either expands or shrinks based of a violated constraint
// We need the invariant which in this case = k
// We need state to be calculated in this case = sum
// We need a left boundary = start
// We need a right boundary = i
// Explicityly add from the right boundary while removing from the left boundary.


const array1 = [2, 1, 5, 1, 3, 2]

const maxSumSubArray = (arr, k)=>{
    let maxSum = 0
    let sum = 0
    let start = 0

    for(let i = 0; i<arr.length; i++){
        sum+=arr[i]
        if(i>=k-1){
            maxSum = Math.max(maxSum, sum)
            sum-=arr[start]
            start++
        }

    }
    return maxSum
}

// Time complexity should 0(n) Linear since the increase in the input size warrants an increase in n iterations within the function .
// This is a fixed-size sliding window problem.
// We maintain a running sum of the current window.
// As we slide the window forward, we add the incoming element and remove the outgoing one, ensuring constant-time updates.
// This allows us to compute the maximum sum in linear time with constant space.

console.log(maxSumSubArray(array1, 3))