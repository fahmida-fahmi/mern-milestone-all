const loadApi = async(name) => {
  try{
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
      const data = await res.json()  
      displayFood(data.meals)
  }
  catch(error){
    console.log(error);
  }
};

const displayFood = (foods) => {
  console.log(foods);
  const getContainer = document.getElementById("container");
  getContainer.innerHTML =''

  foods.forEach(food => {
    console.log(food);
    const div = document.createElement('div')
    div.classList.add('col-4')
      div.innerHTML =
      ` <div class="card h-100">
            <img src="${food.strMealThumb}" class="card-img-top img-fluid" alt="${food.id}">
            <div class="card-body">
                <h5 class="card-title">${food.strMeal}</h5>
                <p class="card-text">This is a card of Foods. I think you will enjoy this and come back again in next time for ordering the favorite food of yours.</p>
                <button onclick ="showModelDetails(${food.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalDetails">
                    Details
                </button>
            </div>
        </div>`;
        getContainer.appendChild(div)
  });
};

const showModelDetails = (idMeal) =>{
    console.log(idMeal);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
    .then(res => res.json())
    .then(data => setModelBody(data.meals[0]))
    .catch(error =>console.log(error))
    
}

const setModelBody = (text) =>{
    document.getElementById('modalDetailsLabel').innerText = text.strMeal
    const div = document.createElement('div')
    const getModel = document.getElementById('modal-body')
    getModel.innerHTML =''
    // console.log(text.strInstructions);
    div.innerHTML = `
    <img src="${text.strMealThumb}" class ="img-fluid">
    <p>${text.strInstructions} </p>`
    getModel.appendChild(div)

}
const searchName = () =>{
    const getSearchText = document.getElementById('search').value 
    loadApi(getSearchText)
    getSearchText.value =''

}
loadApi('rice');

