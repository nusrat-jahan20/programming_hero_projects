const student = {
    name: 'Nusrat Jahan',
    age: 22,
    class: '2-II',
    marks: {
        math: 89,
        physics: 83,
        chemistry: 78
    }
}

// dot notation
const marks = student.marks;
const math = student.marks.math;

console.log(marks, math);

// brecket notation
const mark = student['marks'];
const chemistry = student['marks']['chemistry'];

console.log(mark, chemistry);

const markz = student['marks'];
const phyMark = 'physics';
const physics = student['marks'][phyMark];
console.log(physics);


