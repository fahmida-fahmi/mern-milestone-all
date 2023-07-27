// problem -1.1

const arrow = (a,b,c) => a*b*c
const arrowMultiply = arrow(2,3,4)
console.log(arrowMultiply);

// problem -1.2

const lines = 
`I am a web developer.
I love to code.
I love to eat biryani.`
console.log(lines);

// problem -1.3

const arrowFunc = (myPara, defaultPara = 20) => myPara+ defaultPara
const addTwoPara = arrowFunc(10,21)
console.log(addTwoPara);

// problem -2
const arrowArray = arr => {
    let newArr = []
    for(let i =0;i<arr.length; i++){
        if(arr[i].length%2 ==0){
            newArr.push(arr[i])
        }
    }
    return newArr
}
const friendArr = arrowArray(['fahmid', 'shakib','shamima','zuwel','zeba', 'seba'])
console.log(friendArr);

// problem -3
const square = arr =>{
    let sum = 0 
    for(let i = 0;i<arr.length;i++){
        sum = sum + Math.pow(arr[i],2)
    }
    const avg = sum /arr.length
    return avg.toFixed(2)
    
}
 const avgFunc = square([1,2,3,4])
 console.log(avgFunc);

// problem -4
const assignArr = (arr1,arr2) => [...arr1,...arr2]
const newArr = assignArr([1,2,3],[4,5,6]);
const max = Math.max(...newArr)
console.log(max);