function dataLoad() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => console.log(data));
}

// function loadId(data){
//     const loadId = document.getElementById('loadId')
//     const div = document.createElement('div')
//     div.innerHTML =     `
//     <h2>${data.title}</h2>
//     <p>${data.userId}</p>
//     <p>${data.completed}  'Complete': 'Not complete</p>
//     `
//     loadId.appendChild(div)
// }


// user = {
//     name: 'fahmida fahmi',
//     address: 'Mirpur',
//     3: 'hello',
//     bool : true,
//     1: 12,
// }
// const stringified = JSON.stringify(user)
// const parse = JSON.parse(stringified)
// console.log(stringified);