const searchFood = () => {
    const searchField = document.getElementById("search-field");
    const searchFieldText = searchField.value;
    // console.log(searchFieldText);
    searchField.value = " ";
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFieldText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => (data.meals))
}
const displaySearchResult = meals => {
    const fishContainer = document.getElementById("search-result");
    for (const meal of meals) {
        console.log(meal)
        const div = document.createElement("div");

    }
}