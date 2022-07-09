const MAIN= document.querySelector(".container")

HEADER(MAIN)
INPUT(MAIN, "text", "word")

MAIN.innerHTML += `<p></p>`
const INPUTEL = document.querySelector("input")

const P = document.querySelector("p")

const PALINDROME = (word, reversed = [...word]) => {
    return word === reversed.reverse().join("") ? true : false
}


INPUTEL.addEventListener("keyup", e => {
    const VALUE = INPUTEL.value
    if(PALINDROME(VALUE)){
        P.classList.add("text-center", "text-success")
        P.classList.remove("text-danger")
        P.textContent = "true"
    } else {
        P.classList.add("text-center", "text-danger")
        P.classList.remove("text-success")
        P.textContent = "false"
    }
})
