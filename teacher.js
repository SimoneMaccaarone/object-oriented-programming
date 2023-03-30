class Teacher {

    constructor(name, surname, yob, students) {

        this.name = name;
        this.surname = surname;
        this.yob = yob;
        this.students = students;
    }

    
    //FUNZIONE PER TROVARE LO STUDENTE MIGLIORE 

    findBestStudent() {
        const students = this.students;
        let bestStudent = students[0];

        for (let i = 0; i < students.length; i++) {
            const actualStudent = students[i];

            const bestMean = bestStudent.calulateMean();
            const actualMean = actualStudent.calulateMean();
            if (actualMean > bestMean) {
                bestStudent = actualStudent
            }
        }
        return bestStudent;
    }

    toString(){

    }
    //NOME: Andrea
    //COGNOME: Asioli
    //ETA: 45
    //MIGLIOR STUDENTE: Valentina Cherubuni

    calculateAge(){
        // deve ritornare un numero dell eta attuale dello studente (2023- yob)
    }
    //45
}
