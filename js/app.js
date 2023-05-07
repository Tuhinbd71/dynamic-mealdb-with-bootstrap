const searchFood = () => {
    const searchField = document.getElementById("search-field");
    const searchFieldText = searchField.value;
    // console.log(searchFieldText);
    searchField.value = " ";
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFieldText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.meals))
}
const displaySearchResult = meals => {
    const fishContainer = document.getElementById("search-result");
    for (const meal of meals) {
        console.log(meal)
        const div = document.createElement("div");
        div.classList.add("col")
        div.innerHTML = `
        <div class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">

                <h2 class="card-title">${meal.strMeal}</h2>
                <h4>${meal.strArea}</h4>
                <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
            </div>
        </div>
        `;
        fishContainer.appendChild(div);
    }
}