const MAIN= document.querySelector(".container")

HEADER(MAIN)
INPUT(MAIN, "text", "word")

MAIN.innerHTML += `<p></p>`
const INPUTEL = document.querySelector("input")
const P = document.querySelector("p")
P.classList.add("roman","bg-white", "p-4", "text-center", "mt-6")


const ROT13 = (str, str2 = str.toUpperCase(), copy = [...str2], encrypted = []) => {
    let punc = str2.match(/[^A-Z ]+/)
    const CIPHER = {
        " ": " ",
        A: "N",
        B: "O",
        C: "P",
        D: "Q",
        E: "R",
        F: "S",
        G: "T",
        H: "U",
        I: "V",
        J: "W",
        K: "X",
        L: "Y",
        M: "Z",
        N: "A",
        O: "B",
        P: "C",
        Q: "D",
        R: "E",
        S: "F",
        T: "G",
        U: "H",
        V: "I",
        W: "J",
        X: "K",
        Y: "L",
        Z: "M"
    }
    for(let letter of copy) {
        for(let word of Object.keys(CIPHER)) {
            if(letter === word) {
                encrypted.push(CIPHER[letter])
            }
        }
    }
    if(punc) encrypted.push(punc[0])
    return encrypted.join("")
    console.log(punc)
}

INPUTEL.addEventListener("keyup", e => {
    let value = INPUTEL.value
    P.textContent = ROT13(value)
})
