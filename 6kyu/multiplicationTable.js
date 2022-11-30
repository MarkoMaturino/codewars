// Your task, is to create NxN multiplication table, of size provided in parameter.

// for example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

// My Solution:
multiplicationTable = function(size) {
    let result = []
    for(let i = 0; i < size; i++){
      result.push([])      
    }
    for(let i = 1; i <= size; i++){
        result[0].push(i)
    }
    for(let i = 1; i <= size; i++){
       result[0][i - 1]
       for(let k = 1    ; k <= size; k++){
        if(i > 1){
        result[i - 1].push(k * i)}
       }
    }
    
    return result
}