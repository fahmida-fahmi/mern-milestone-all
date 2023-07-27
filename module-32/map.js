// 1. problem with for loop

// const arr = [1,3,5,7,9]

// for(let i =0;i<arr.length;i++){
//     arr[i] =arr[i]+1
// }
// console.log(arr);

// or with map

// const makeEven = arr.map(a => a+1)
// console.log(makeEven);

// 2. problem

// const arr = [33,50,79,78,90,101,30]
// const getDivisible = arr.filter(a => a%10 ==0)
// console.log(getDivisible);

// 3. problem

// const arr = [33,50,79,78,90,101,30]
// const getWithFind = arr.find( a => a%10==0)
// console.log(getWithFind);

// ---------------reduce problem

// const arr = [1,9,17,22]
// const arrReduce = arr.reduce((pre,cur)=>pre+cur, 0)
// console.log(arrReduce);

// solution with for loop

// const arr = [1,9,17,22]
// let sum =0
// for(let i =0;i<arr.length;i++){
//      sum = arr[i] +sum
// }
// console.log(sum);

// second problem with reduce

const people = [
    {name: "Meena",age: 20},
    {name: "Rina",age: 15},
    {name: "Suchorita",age: 22}
];

// const sumAge = people.reduce((pre, cur) => {
//   return pre + cur.age;
// }, 0);
// console.log(sumAge);

// with for loop

// let sum = 0
// for(let i =0;i<people.length;i++){
//     sum = sum + people[i].age 
// }
// console.log(sum);

// 4. problem 

// const student = {
//     name: 'Fredie',
//     age: 26
// }
// console.log(student.age);

// 5.problem 

// let date ={
//     location: [
//         {
//             latitude: '34.5, 37.8',
//             longitude: '98.77, 58.7',
//             city: 'Hyderabad',
//             country: 'India'
//         }
//     ]
// }
// console.log(date.location[0].city);

// 6. problemm 

// const user = {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   }
//   const {id} = user

//   console.log(user.email);
//   console.log(user.address);
//   console.log(user.address.city);
//   console.log(user.address.geo.lat);
//   console.log(user.company.name);
//   console.log(id);


// [1,2,3,4,5].filter(a=> a%2)
// console.log([1,2,3,4,5].filter(a=> a%3));

const friends = ["Moushumi", "Misha", "Manna", "mimi" , "mahiya"]
console.log(friends.find(a => a.length==5));