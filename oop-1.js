
//-------- CREAZIONE STUDENTI & PROFESSORE ---------

const student1 = new Student('Davide', 'Consigliere', 1989, [4, 6, 7, 4, 6])
const student2 = new Student('Francesc', 'Badile', 1993, [5, 8, 6, 7, 10])
const student3 = new Student('Valentina', 'Cherubuni', 2001, [8, 7, 10, 9, 8])

const teacher = new Teacher('Andre', ' Asioli', 1978, [student1, student2, student3])


// FUNZIONE PER LA MEDIA 
console.log(student2.calulateMean());

//  FUNZIONE PER TROVARE LO STUDENTE MIGLIORE 
console.log(teacher.findBestStudent());


//_-_-_-_-_-    COMPITO     _-_-_-_-_-








//--------- VECCHIO CODIDE ---------------
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