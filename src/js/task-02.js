const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients');

const createItem = element => {
  const item = document.createElement('li');
  item.textContent = element;
  item.classList.add('item');
  return item;
}

const itemsRefs = ingredients.map(createItem);

ingredientsRef.append(...itemsRefs);