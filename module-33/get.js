function getFetch(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => getName(data))
}

function getName(data){
    for(const user of data){
        console.log(user.name);
        const loadId = document.getElementById('loadId')
        const div = document.createElement('div')
        div.classList.add('style')
        div.innerHTML =`
        <h2>${user.name}</h2>
        <p>${user.username}</p>
        <p>${user.email}</p>
        `
        loadId.appendChild(div)
    }
}
