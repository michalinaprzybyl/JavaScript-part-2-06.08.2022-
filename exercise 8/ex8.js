// Ćwiczenie 8: Pobierz od użytkownika 10 liczb, zapisz do tablicy i zsumuj.

const tab = [];
let sum = 0; //zapamiętaj do zadań z sumowaniem liczb

for (let i = 0; i < 10; i++) {
    let number = parseInt(prompt("Enter the number"));
    tab.push(number);
}

for (let i = 0; i < tab.length; i++) {
    sum = sum + tab[i];
}

console.log(sum);