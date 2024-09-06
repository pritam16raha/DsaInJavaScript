let a = [ 1,2,3,4,5,6, 7,8,9,,10, 11, 15 ]
let target = 5
let b = []
const getIndex = (num1, num2) => {
    for ( let i=0; i<=num1.length ; i++ ){
        for ( let j = 0; j<=num1.length ; j++ ){
            if(num1[i] + num1[j] == num2){
                b.push(i, j)
            }
        }
    }
}
getIndex(a, target)
console.log("Array is", b)