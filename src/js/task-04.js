let counterValue = 0;

const refs = {
    incrementBtn: document.querySelector('[data-action="increment"]'),
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    counterValue: document.querySelector('#value'),
};

refs.incrementBtn.addEventListener('click', onIncrement);
refs.decrementBtn.addEventListener('click', onDecrement);

function onIncrement() {
    counterValue += 1;
    refs.counterValue.textContent = counterValue;
}

function onDecrement() {
      counterValue -= 1;
      refs.counterValue.textContent = counterValue;
}