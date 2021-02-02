const height = document.getElementById("height")
const age = document.getElementById("age")
const weight = document.getElementById("weight")
const female = document.getElementById("female")
const male = document.getElementById("male")
const work = document.getElementById("work")
const grundumsatzKcal = document.getElementById("grundumsatzKcal")
const grundumsatzKJ = document.getElementById("grundumsatzKJ")
const gesamumsatzKcal = document.getElementById("gesamumsatzKcal")
const gesamumsatzKJ = document.getElementById("gesamumsatzKJ")
let grundumsatz = 0
function calculate() {
    if (female.checked) {

        grundumsatz = 655.1 + (9.6 * Number(weight.value)) + (1.8 * Number(height.value)) - (4.7 * Number(age.value))
        //Do not do:
        // grundumsatz = 655.1 + (9.6 * Number(document.getElementById("weight").value)) + (1.8 * Number(document.getElementById("height").value)) - (4.7 * Number(document.getElementById("age").value))

    } else {
        grundumsatz = 664.7 + (13.7 * Number(weight.value)) + (5 * Number(height.value)) - (6.8 * Number(age.value))
    }
    grundumsatzKcal.innerHTML = grundumsatz.toFixed(2)
    grundumsatzKJ.innerHTML = (grundumsatz * 4.184).toFixed(2)
    gesamumsatzKcal.innerHTML = (grundumsatz * work.value).toFixed(2)
    gesamumsatzKJ.innerHTML = (grundumsatz * 4.184 * work.value).toFixed(2)
}
