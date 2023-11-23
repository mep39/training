const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('ul#ingredients');

const elements = ingredients.map(el => {
  const navItemEl = document.createElement('li');
  
  navItemEl.textContent = el;
  navItemEl.classList.add('item');
  return navItemEl;
});

console.log(elements);

ingredientsEl.append(...elements);

// const ingredientsEl = document.querySelector('ul#ingredients');

// const listCreation = content => {
//   return content.map((el) => {

//   const navItemEl = document.createElement('li');
  
//   navItemEl.textContent = el;
//   navItemEl.classList.add('item');
//   return navItemEl;
// });
// };

// const elements = listCreation(ingredients)
// ingredientsEl.append(...elements);