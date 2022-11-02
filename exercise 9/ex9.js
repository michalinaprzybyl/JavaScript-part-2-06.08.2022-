// Ćwiczenie 9: Napisz program, który pobierze 10 liczb od użytkownika, zapisze je
// w tablicy i sprawdzi, czy użytkownik podał jakieś duplikaty.

const tab3 = [];

for (let i = 0; i < 10; i++) {
    let number = parseInt(prompt("Enter any nymber"));
    if (tab3.includes(number)) {
        console.log("Duplicate");
    } else {
        tab3.push(number);
    }
}

for (let el of tab3) {
    console.log(el);
}
