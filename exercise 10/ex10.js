// Ćwiczenie 10: Napisz program, który pobierze 10 liczb od użytkownika, a następnie 
// podzieli tablice na dwie osobne. We jednej będą liczby parzyste, a w drugiej nieparzyste.

const tab = [];
const even = [];
const odd = [];

for (let i = 0; i < 10; i++) {
    let a = parseInt(prompt("Enter any number"));
    tab.push(a);
}

for (let i = 0; i < tab.length; i++) {
    if (tab[i] % 2 === 0) {
        even.push(tab[i]);
    } else {
        odd.push(tab[i]);
    }
}

console.log("even" + even);

console.log("odd" + odd);