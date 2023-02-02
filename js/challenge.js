const minusButton = document.querySelector("#minus")
const plusButton = document.querySelector("#plus")
const theCounter = document.querySelector("#counter")
let i = theCounter.innerText;

minusButton.addEventListener('click', e => {
    theCounter.innerText = --i;
})

plusButton.addEventListener('click', e => {
    theCounter.innerText = ++i;
})