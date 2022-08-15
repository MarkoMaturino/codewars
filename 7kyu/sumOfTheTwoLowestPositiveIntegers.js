// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

// ARRAYSFUNDAMENTALS

// My Soluton:
function sumTwoSmallestNumbers(numbers) {  
    let removeDupesFromNumbers = new Set(numbers)
    let convertRemoveDupesFromArray = Array.from(removeDupesFromNumbers)
    let firstLowestValue = Math.min(...removeDupesFromNumbers)
    let filterFirstLowest = convertRemoveDupesFromArray.filter(l => l != firstLowestValue)
    let secondLowestValue = Math.min(...filterFirstLowest)
    return firstLowestValue + secondLowestValue
  }
// Looking back at this solution I realized that I could've done this a lot more efficiantly
// I think i kind of misunderstood the question at first.
// Now I would've just used the sort method
