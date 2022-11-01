// Ćwiczenie 2: Napisz program, który pobiera od użytkownika ciąg liczb całkowitych.
// Pobieranie danych kończone jest podaniem liczby 0 (nie wliczana do danych). Następnie, 
// program oblicza sumę największej oraz najmniejszej z podanych liczb oraz ich średnią 
// arytmetyczną i wypisuje je w konsoli. Przykładowo dla ciągu podawanych liczb: 1, -4, 
// 2, 17, 0, program powinien wypisać w konsoli liczby: 13, 6.5.

let count = 0; //liczy ile razy user został zapytany o podanie liczby, tj. jeśli 5x to wartość count wyniesie 4, bo nie liczymy 0
let suma = 0; //kontener na zmienną, tu aktualna suma liczb wprowadzonych
let max = -999999999;
let min = 999999999;

while (true) {
    let number = parseInt(prompt("Enter an integer number and press 0 to stop the questions"));
    if (number === 0) {
        break;
    }
    count++;
    suma = suma + number;
    if (number > max) {
        max = number;
    }
    if (number < min) {
        min = number;
    }
}

console.log(min + max);
console.log(suma / count);