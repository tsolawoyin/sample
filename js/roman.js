const MAIN = document.querySelector(".container")

HEADER(MAIN)
INPUT(MAIN, "number", "number")

MAIN.innerHTML += `<p></p>`
const INPUTEL = document.querySelector("input")
const P = document.querySelector("p")
P.classList.add("roman","bg-white", "p-4", "text-center", "mt-6")

const roman = (number, roman_numeral = "") => {
    const numerals = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10, 
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }
    while(number > 0) {
        for( num of Object.keys(numerals)){
            if(number >= numerals[num]){
                roman_numeral += num
                number -= numerals[num]
                break;
            }
        }
    }
    return roman_numeral
}

INPUTEL.addEventListener("keyup", e => {
    P.textContent = roman(INPUTEL.value)
})

