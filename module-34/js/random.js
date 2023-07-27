const loadUser = ()=>{
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => displayUserInfo(data))

}

const displayUserInfo= user =>{
    console.log(user);
    // const random = document.getElementById('random')
    // random.innerHTML = `<h2>Name: ${user.results[0].name.title} ${user.results[0].name.first} ${user.results[0].name.last}</h2>
    // <h3>Gender: ${user.results[0].gender}</h3> 
    // <img src="${user.results[0].picture.large}">`

    const img = document.getElementById('img')
    img.src = `${user.results[0].picture.large}`
    // img.setAttribute('src',`${user.results[0].picture.large}`)
    console.log(img);
    
}
loadUser()