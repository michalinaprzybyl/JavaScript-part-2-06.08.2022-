// Ćwiczenie 10: Pobierz od użytkownika tekst i wyświetl go od końca.

let text = prompt("Enter any text");

// 1st method
for (let i = text.length - 1; i >= 0; i--) {
    console.log(text[i]);
}

// 2ns method
let invText = "";

for (let i = text.length - 1; i >= 0; i--) {
    invText = invText + text[i];
}

console.log(invText);