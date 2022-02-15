const createStudent = (sName, sGrade) => {
    return {
        name: sName,
        grade: sGrade
    }
}

const addMathGrade = (student) => {
    student.math = 'B';
    return student;
}

const addHistoryGrade = (student) => {
    student.history = 'C';
    return student;
}

const addScienceGrade = (student) => {
    student.science = 'A';
    return student;
}

let x = createStudent('Bob', 10);
x = addMathGrade(x);
x = addHistoryGrade(x);
x = addScienceGrade(x);
console.log(x);