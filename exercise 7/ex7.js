// Ćwiczenie 7: Pobierz od użytkownika 10 liczb, a następnie zapisz je w tablicy
// i ułóż od największej do najmniejszej.

const tab = [];

for (let i = 0; i < 10; i++) {
    let number = parseInt(prompt("Enter the number"));
    tab.push(number);
}

for (let i = tab.length - 1; i >= 0; i--) {
    console.log(tab[i]);
}