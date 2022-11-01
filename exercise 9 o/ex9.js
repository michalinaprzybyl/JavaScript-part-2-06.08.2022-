// Ćwiczenie 9: Napisz program, który pobierze 10 liczb od użytkownika, zapisze je
// w tablicy i sprawdzi, czy użytkownik podał jakieś duplikaty.

// 1st method
const tab3 = [];

for (let i = 0; i < 10; i++) {
    let number = parseInt(prompt("Enter any nymber"));
    if (tab3.includes(number)) {
        console.log("Duplicate");
    } else {
        tab3.push(number);
    }
}

// 2nd method
const tab4 = [3, 2, 1, 2, 4, 5, 2, 7, 3, 9, 3];
const tab5 = [];

for (let i = 0; i < tab4.length; i++) {
    if (tab5.includes(tab4[i])) {
        console.log("Duplicate");
        break;
    } else {
        tab5.push(tab4[i]);
    }
}

// 3rd method
const tab6 = [3, 2, 3, 38, 34, 6, 7, 7];
let duplicates = false;

for (let i = 0; i < tab6.length; i++) {
    for (let j = i + 1; j < tab6.length; j++) {
        if (tab6[j] === tab6[i]) {
            duplicates = true;
            break;
        }
    }

    if (duplicates === true) {
        console.log("Duplicate");
        break;
    }
}