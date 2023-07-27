const loadApi = async(searchItem) =>{
    try {
        const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchItem}`)
        const data = await res.json()
        displayPhone(data.data)
    } catch (error) {
        console.log(error);
    }
}

const displayPhone = (phones) => {
    console.log(phones);
    const main = document.getElementById('phone-container')
    
    main.innerHTML =''
    phones = phones.slice(0,20)
    noFound = document.getElementById('no-found-phone')
    if(phones.length === 0){
        noFound.classList.remove('d-none')
    }
    else{
        noFound.classList.add('d-none')
    }

    phones.forEach(el  => {
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML =
        `<div class="card">
            <img src="${el.image}" class="img-fluid card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${el.phone_name}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.</p>
            </div>
        </div>`
        main.appendChild(div)
    });
    toggleSpinner(false)
}

document.getElementById('searchBtn').addEventListener('click', function(){
    toggleSpinner(true)
    const getInput = document.getElementById('searchInput')
    const getInputValue =getInput.value
    
    loadApi(getInputValue)
    getInput.value = ''
    
})

const toggleSpinner = isLoading =>{
    const loadSection = document.getElementById('loader')
    if(isLoading){
        loadSection.classList.remove('d-none')
    }
    else{
        loadSection.classList.add('d-none')

    }
}

// loadApi()
document.getElementById('searchInput').addEventListener("keypress", function(event) {
if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("searchBtn").click();
}
});