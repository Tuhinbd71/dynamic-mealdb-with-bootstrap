const searchFood = () => {
    const searchField = document.getElementById("search-field");
    const searchFieldText = searchField.value;
    searchField.value = " ";
    if (searchFieldText == " ") {
        // Please show something
    }
    else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFieldText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.meals))
    }
}
const displaySearchResult = meals => {
    const searchResult = document.getElementById("search-result");
    searchResult.textContent = " ";
    if (meals.length == 0) {
    }
    for (const meal of meals) {
        const div = document.createElement("div");
        div.classList.add("col")
        div.innerHTML = `
        <div onclick="loadMealDetails(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">

                <h2 class="card-title">${meal.strMeal}</h2>
                <h4>${meal.strArea}</h4>
                <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
            </div>
        </div>
        `;
        searchResult.appendChild(div);
    }
}
const loadMealDetails = mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]))
}
const displayMealDetails = meal => {
    // console.log(meal)
    const mealDetailes = document.getElementById("meal-details");
    mealDetailes.textContent = " ";
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
            <a href="${meal.strYoutube}" class="btn btn-primary">Click here</a>
        </div>
    `;
    mealDetailes.appendChild(div);
}