let counterValue = 0;

const btnMinus = document.querySelector('[data-action="decrement"]');
const btnPlus = document.querySelector('[data-action="increment"]');
const btnValue = document.querySelector('#value');

btnMinus.addEventListener('click', () => {
    counterValue -= 1;
    btnValue.textContent = counterValue;
});

btnPlus.addEventListener('click', () => {
    counterValue += 1;
    btnValue.textContent = counterValue;
});