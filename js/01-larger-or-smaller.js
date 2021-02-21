let num1 = parseInt(window.prompt("Enter a number."));
let num2 = parseInt(window.prompt("Enter another number."));

if (num1 > num2) {
    window.document.write(`${num1} is the higher number`);
} else if (num2 > num1) {
    window.document.write(`${num2} is the higher number`);
} else {
    window.document.write("The numbers are the same");
}