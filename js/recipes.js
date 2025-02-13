import { BASE_URL } from './info.js';

const DEFAULT_RECIPES = 10;

const showRandomRecipes = async (numRecipes = DEFAULT_RECIPES) => {

    let recipeList = "";

    for (let index = 0; index < numRecipes; index++) {
        await fetch(`${BASE_URL}/random.php`)
        .then(res => res.json())
        .then(data => {
            data = data.meals[0];
            recipeList += `
                <article>
                    <header>
                        <h2>${data.strMeal}</h2>
                    </header>
                    <img src="${data.strMealThumb}/preview" alt="${data.strMeal}">
                    <div>
                        <p class="pill">${data.strCategory}</p>
                        <p class="pill">${data.strArea}</p>
                    </div>
                </article>
            `;
        })
        .catch(error => console.log(error));
        document.querySelector('#recipe-list').innerHTML = recipeList;
    }
};
showRandomRecipes();
