
//-------- CREAZIONE STUDENTI & PROFESSORE ---------

const student1 = new Student('Davide', 'Consigliere', 1989, [4, 6, 7, 4, 6])
const student2 = new Student('Francesco', 'Badile', 1993, [5, 8, 6, 7, 10])
const student3 = new Student('Valentina', 'Cherubuni', 2001, [8, 7, 10, 9, 8])
const student4 = new Student('Simone', 'Maccarone',2003,);
const teacher = new Teacher('Andrea', ' Asioli', 1978, [student1, student2, student3])

const vecchietto = new Person('Battista','Parodi',1934)


console.log(vecchietto.toString())
console.log(student4.toString())

student1.yob= 2979;


// student2.grades = [20, 30, 40, 50, 60]

console.log(teacher + '')
console.log(student1.yob)
console.log(student3.yob)
console.log(student2.grades)


//  FUNZIONE PER LA MEDIA 
console.log(`MEDIA DEI VOTI DI:`, student2.calculateMean());

//  FUNZIONE PER TROVARE LO STUDENTE MIGLIORE 
console.log(teacher.findBestStudent());

//  FUNZIONE PER CALCOLARE L'ETA 
console.log(teacher.calculateAge());

// console.log(student2.toString());
// console.log(teacher.toString());










//--------- VECCHIO CODICE ---------------
//  // esempio di vecchi studenti

// const student1 = {
//     name: 'Davide',
//     surname: 'Consigliere',
//     yob: 1989,
//     grades: [4, 6, 7, 4, 6]
// }
// //       PROF
// const teacher = {
//     name: 'Andrea',
//     surname: 'Asioli',
//     yob: 1978,
//     students: [student1, student2, student3]
// }


//-------- FUNZIONE PER LA MEDIA ---------

// function calculateMeanOfStudent(student) {
//     const grades = student.grades;
//     let sum = 0
//     for (let i = 0; i < grades.length; i++) {
//         const grade = grades[i];
//         sum += grade;
//     }
//     const mean = sum / grades.length;
//     return mean;
// }

// console.log(calculateMeanOfStudent(student1));


//-------- FUNZIONE PER TROVARE LO STUDENTE MIGLIORE ---------

// function findBestStudentOfTeacher(teacher) {
//     const students = teacher.students;
//     let bestStudent = students[0];

//     for (let i = 0; i < students.length; i++) {
//         const actualStudent = students[i];

//         const bestMean = calculateMeanOfStudent(bestStudent);
//         const actualMean = calculateMeanOfStudent(actualStudent);
//         if (actualMean > bestMean) {
//             bestStudent = actualStudent
//         }
//     }
//     return bestStudent;
// }

// console.log('il miglior studente è:', findBestStudentOfTeacher(teacher))