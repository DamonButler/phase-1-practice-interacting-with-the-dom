const minusButton = document.querySelector("#minus")
const plusButton = document.querySelector("#plus")
const theCounter = document.querySelector("#counter")
const theLikeButton = document.querySelector("#heart")
const ul = document.querySelector(".likes")


let i = theCounter.innerText;

minusButton.addEventListener('click', e => {
    theCounter.innerText = --i;
})

plusButton.addEventListener('click', e => {
    theCounter.innerText = ++i;
})

theLikeButton.addEventListener('click', e => {
    let li = document.createElement("li")
    theCounter.innerText
    li.innerText = theCounter.innerText
    ul.append(li)
    
    if (li = theCounter.innerText) {
        return "has been liked 1 time";
    }
    else { "has been liked XXX times"
    }
        //console.log("Hellooo");
})

// if this has been liked once, then return "li.innerText" has been liked 1 time
// if this has been liked more than once, then return "li.innerText" has been liked X times


