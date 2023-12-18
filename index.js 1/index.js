function studentGrade() {
    let mark = parseInt(prompt("Enter the student's mark: "));

    while (mark < 0 || mark > 100) {
        alert("Invalid input. Please enter a mark between 0 and 100.");
        mark = parseInt(prompt("Enter the student's mark: "));
    }

    let grade;
    if (mark >= 80) {
        grade = 'A';
    } else if (mark >= 60) {
        grade = 'B';
    } else if (mark >= 50) {
        grade = 'C';
    } else if (mark >= 40) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    return `The student's grade is: ${grade}`;
}

console.log(studentGrade());