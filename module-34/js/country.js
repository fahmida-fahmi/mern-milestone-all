const loadCountry =()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountry(data))
}

const displayCountry = countryInfo =>{
    console.log(countryInfo);
    const country = document.getElementById('country')
    countryInfo.forEach(el => {
        console.log(el);
        const eachCountry = document.createElement('div')
        eachCountry.classList.add('country')
        eachCountry.innerHTML = `
            <h2 class="text-2xl my-3">Country Name: ${el.name.common}</h2>
            <p class="text-2xl mb-4">Capital Name: ${el.capital? el.capital[0]:'no capital'}</p>
            <button class="border-2" onclick="displayDetails('${el.cca3
            }')">Details of This Country</button>`
            country.appendChild(eachCountry)
    });    
}

const displayDetails = code =>{
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
    .then(res => res.json())
    .then(data => showDetails(data[0]))
}

const showDetails = data =>{
    console.log(data);
    const showDetails = document.getElementById('showDetails')
    showDetails.innerHTML = `
    <h2 class="text-3xl">Name: ${data.name.common}</h2>  
    <img src="${data.flags.png}" alt="">
    `
}
loadCountry()