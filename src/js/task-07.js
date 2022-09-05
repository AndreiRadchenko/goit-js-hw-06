const refs = {
    slider: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
}

const INIT_FONT_SIZE = parseInt(window.getComputedStyle(refs.slider).fontSize);
refs.slider.value = INIT_FONT_SIZE;

function onSliderInput({ currentTarget: { value } }) {
    refs.text.style.fontSize = `${value}px`;
}

refs.slider.addEventListener('input', onSliderInput);
