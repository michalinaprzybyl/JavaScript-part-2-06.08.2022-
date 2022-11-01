// Ćwiczenie 3: Napisz program, który pobiera od użytkownika liczbę całkowitą większą 
// od 1 i sprawdza czy liczba jest liczbą pierwszą. W przypadku, kiedy liczba ta jest 
// liczbą pierwszą program wypisze w konsoli wiadomość "Yes", w przeciwnym przypadku 
// wypisze w konsoli wiadomość "No". W przypadku, gdy użytkownik poda liczbę mniejszą 
// lub równą 1, program wypisze w konsoli wiadomość: "Your error".

let number = parseInt(prompt("Enter an integer number greater than 1"));
let isPrime = true;

if (number <= 1) {
    console.log("Your error");
} else {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime === true) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}