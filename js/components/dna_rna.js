const MAIN = document.querySelector(".container")

HEADER(MAIN)
INPUT(MAIN, "text", "DNA sequence...")
for(let i = 1; i <= 3; i++) {
    MAIN.innerHTML += `<p></p>`
}
const INPUTEL = document.querySelector("input")
const P = Array.from(document.querySelectorAll("p"))
console.log(P);
P.forEach((element, index) => {
    element.classList.add("p","roman","bg-white", "p-4", "text-center", "mt-6")
})

// DNA to complimentary dna and rna
const DNA_PAIR = {
        A: "T",
        G: "C",
        T: "A",
        C: "G",
        set toRNA(U) {
            this.A = U
        }
    }
let copied = {
        A: "U",
        G: "C",
        T: "A",
        C: "G",
        set toRNA(U) {
            this.A = U
        }
    }

const DNA_RNA =  (str, dna, copy = [...str], encrypted = []) => {
    // if(rna) dna.toRNA = "U"
    for(let letter of copy) {
        for(let word of Object.keys(dna)) {
            if(letter === word) {
                encrypted.push(dna[letter])
            }
        }
    }
    // if(reversed) return encrypted.reverse().join("")
    return encrypted.join("")
}

// DNA to amino acid
const GENETIC_CODE = [
    ["F", "Phe", "UUU", "UUC"],
    ["L", "Leu", "UUA", "UUG", "CUG", "CUA", "CUG"],
    ["Y", "Tyr", "UAU", "UAC"],
    ["S", "Ser", "UCU", "UCA", "UCG", "AGU"],
    ["st", "Stop", "UAA", "UAG", "UGA"],
    ["W", "Trp", "UGG"],
    ["P", "Pro", "CCU", "CCC", "CCA", "CCG"],
    ["H", "His", "CAU", "CAC"],
    ["Q", "Glutamine", "CAA", "CAG"],
    ["R", "Arg", "CGU","CGC", "CGA", "CGG", "AGA", "AGG"],
    ["I","Ile", "AUU", "AUC", "AUA"],
    ["M", "Met", "AUG"],
    ["T", "Thr", "ACU", "ACC", "ACA", "ACG"],
    ["N", "Asn", "AAC", "AAU"],
    ["K", "Lys", "AAA", "AAG"],
    ["V", "Val", "GUU", "GUC", "GUA", "GUG"],
    ["A", "Ala", "GCU", "GCC", "GCA", "GCG"],
    ["D", "Asp", "GAU"],
    ["E", "Glu", "GAA", "GAG"],
    ["G", "Gly", "GGU", "GUC", "GGA", "GGG" ]
]

const DNA_TO_AMINO_ACID = (word, aminoAcid = []) => {
    for(let i = 0; i < word.length; i += 3) {
        let str = ""
        for(let j = i; j < i+3; j++) {
            str += word[j]
        }
        for(let code of GENETIC_CODE) {
            if(code.includes(str)) {
                aminoAcid.push(code[1])
            }
        }
    }
    return aminoAcid.join("-")
}

INPUTEL.addEventListener("keyup", e => {
    let value = INPUTEL.value.toUpperCase()
    let regex = /^[ATGC]+$/
    if(regex.test(value)) {
        P[0].textContent = DNA_RNA(value, DNA_PAIR)
        P[1].textContent = DNA_RNA(value, copied )
        P[2].textContent = DNA_TO_AMINO_ACID(P[1].textContent)
    } else alert("Please input a valid DNA sequence")

})