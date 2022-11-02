// Ćwiczenie 10: Pobierz od użytkownika tekst i wyświetl go od końca.

let text = prompt("Enter any text");
let invText = "";

for (let i = text.length - 1; i >= 0; i--) {
    invText = invText + text[i];
}

console.log(invText);