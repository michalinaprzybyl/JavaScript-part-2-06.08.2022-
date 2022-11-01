// Ćwiczenie 5: Napisz program, który pyta użytkownika o słowo tak długo aż 
// użytkownik nie poda słowa “STOP”. Dopóki to słowo nie zostanie wpisane to 
// program będzie wyświetlał wszystkie te słowa, które użytkownik do tej pory 
// wprowadził.

let answer = "STOP";
let empty = "";

while (true) {
    let ask = prompt("Wpisz dowolne słowo");
    if (ask === answer) {
        console.log("Prawidlowe Słowo");
        break;
    } else if (ask !== answer) {
        empty = empty + ask + " ";
        console.log(empty);
    }
}