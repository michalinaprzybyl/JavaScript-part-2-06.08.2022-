// Ćwiczenie 1: Napisz program do obliczania pensji w zależności od tyou umowy. Użytkownik
// podaje typ umowy i kwotę brutto. Wykonaj zadanie za pomocą IF oraz switch.
// a. umowa zlecenie: kwota brutto * 0.1;
// b. etat: kwota brutto - (kwota brutto * 0.17);
// c. B2B: kwota brutto - (kwota brutto * 0.12) + 1000;

let contract = prompt("Specify the number of the type of contract: 1. zlecenie, 2. etat, 3. B2B");
let gross = parseFloat(prompt("Enter the gross amount"));

// IF...ELSE method
if (contract === "1") {
    console.log(gross * 0.1 + " PLN");
} else if (contract === "2") {
    console.log(gross - (gross * 0.17) + " PLN");
} else if (contract === "3") {
    console.log(gross - (gross * 0.12) + 1000 + " PLN");
} else {
    console.log("Contract error");
}

// switch method
switch (contract) {
    case "1":
        console.log(gross * 0.1 + " PLN");
        break;
    case "2":
        console.log(gross - (gross * 0.17) + " PLN");
        break;
    case "3":
        console.log(gross - (gross * 0.12) + 1000 + " PLN");
        break;
    default:
        console.log("Contract error");
        break;
}
