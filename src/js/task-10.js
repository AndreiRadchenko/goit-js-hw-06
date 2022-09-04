const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;

const refs = {
  createButton: document.querySelector('[data-create]'),
  destroyButton: document.querySelector('[data-destroy]'),
  inputNumber: document.querySelector('input'),
  insertingPlace: document.querySelector('#boxes'),
}

const  createBoxes = amount => {
  const arrayOfBoxesLayouts = [...Array(amount)].map((box, index) => {
    const width = 30 + 10 * index;
    const height = 30 + 10 * index;
    const backgroundColor = getRandomHexColor();
    return `<div style="width: ${width}px; height: ${height}px; background-color: ${backgroundColor};"></div>`
  }).join('');

  return arrayOfBoxesLayouts;
}

const onCreateButtonClick = () => refs.insertingPlace.innerHTML = createBoxes(Number(refs.inputNumber.value));

const onDestroyButtonClick = () => {
  refs.insertingPlace.innerHTML = '';
  refs.inputNumber.value = '';
}

refs.createButton.addEventListener('click', onCreateButtonClick);
refs.destroyButton.addEventListener('click', onDestroyButtonClick)
