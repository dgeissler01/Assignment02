let grade = parseInt(window.prompt("Enter numeric grade from 1-100."));

if (grade < 1 || grade > 100) {
    alert("Sorry, only numbers between 1 and 100 are accepted");
} else if (grade >= 90) {
    window.console.log("You received an A");
} else if (grade >= 80 && grade <= 89) {
    window.console.log("You received a B");
} else if (grade >= 70 && grade <= 79) {
    window.console.log("You received a C");
} else if (grade >= 60 && grade <= 69) {
    window.console.log("You received a D");
} else {
    window.console.log("You received and F");
}