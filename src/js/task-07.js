const refs = {
    slider: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
}

function onSliderInput({ currentTarget: { value } }) {
    refs.text.style.fontSize = `${value}px`;
}

refs.slider.addEventListener('input', onSliderInput);
