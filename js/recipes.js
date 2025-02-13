import { BASE_URL } from './info.js';
const DEFAULT_RECIPES = 10;
const showRandomRecipes = async (numRecipes = DEFAULT_RECIPES) => {

    const fragment = document.createDocumentFragment();
    for (let index = 0; index < numRecipes; index++) {

        await fetch(`${BASE_URL}/random.php`)
        .then(response => response.json())
        .then(data => {
            data = data.meals[0];

            const h2 = document.createElement('h2');
            h2.innerText = data.strMeal;

            const header = document.createElement('header');
            header.append(h2);

            const img = document.createElement('img');
            img.setAttribute('src', `${data.strMealThumb}/preview`);
            img.setAttribute('alt', data.strMeal);

            const pCategory = document.createElement('p');
            pCategory.classList.add('pill');
            pCategory.innerText = data.strCategory;

            const pArea = document.createElement('p');
            pArea.classList.add('pill');
            pArea.innerText = data.strArea;
            
            const div = document.createElement('div');
            div.append(pCategory);
            div.append(pArea);

            const article = document.createElement('article');
            article.append(header);
            article.append(img);
            article.append(div);

            fragment.append(article);
        })
        .catch(error => console.log(error));
    }
    document.querySelector('#recipe-list').append(fragment);
};

showRandomRecipes();

// const showRandomRecipes = async (numRecipes = DEFAULT_RECIPES) => {

//     let recipeList = "";

//     for (let index = 0; index < numRecipes; index++) {
//         await fetch(`${BASE_URL}/random.php`)
//         .then(res => res.json())
//         .then(data => {
//             data = data.meals[0];
//             recipeList += `
//                 <article>
//                     <header>
//                         <h2>${data.strMeal}</h2>
//                     </header>
//                     <img src="${data.strMealThumb}/preview" alt="${data.strMeal}">
//                     <div>
//                         <p class="pill">${data.strCategory}</p>
//                         <p class="pill">${data.strArea}</p>
//                     </div>
//                 </article>
//             `;
//         })
//         .catch(error => console.log(error));
//         document.querySelector('#recipe-list').innerHTML = recipeList;
//     }
// };