const MAIN= document.querySelector(".container")

HEADER(MAIN)
INPUT(MAIN, "text", "word")

MAIN.innerHTML += `<p></p>`
const INPUTEL = document.querySelector("input")
const P = document.querySelector("p")
P.classList.add("p","roman","bg-white", "p-4", "text-center", "mt-6")
// FOOTER(MAIN) to be fixed later

const ROT13 = (str, copy = [...str], encrypted = []) => {
    const CIPHER = {
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
        Z: "M",
        a: "n",
        b: "o",
        c: "p",
        d: "q",
        e: "r",
        f: "s",
        g: "t",
        h: "u",
        i: "v",
        j: "w",
        k: "x",
        l: "y",
        m: "z",
        n: "a",
        o: "b",
        p: "c",
        q: "d",
        r: "e",
        s: "f",
        t: "g",
        u: "h",
        v: "i",
        w: "j",
        x: "k",
        y: "l",
        z: "m"
    }
    let regex = /^[^a-zA-Z]+$/
    for(let letter of copy) {
        if(regex.test(letter)) encrypted.push(letter)
        for(let word of Object.keys(CIPHER)) {
            if(letter === word) {
                encrypted.push(CIPHER[letter])
            }
        }
    }
    return encrypted.join("")
}

INPUTEL.addEventListener("keyup", e => {
    let value = INPUTEL.value
    P.textContent = ROT13(value)

    // for Ope
    if( value === "YBGHF") setTimeout(() => alert("I wish you success all the way darling. LOVE YOU ❤"), 2000)

    // for yanmife
    if( value === "V ybir lnazvsr") setTimeout(() => alert("I missed you all the way. Wishing you all the best over there. Take care dear"), 2000)
})
