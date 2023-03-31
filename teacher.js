class Teacher extends Person {

    constructor(name, surname, yob, students) {

        super(name,surname,yob)
        this.students = students;
    }

    
    //FUNZIONE PER TROVARE LO STUDENTE MIGLIORE 

    findBestStudent() {
        const students = this.students;
        let bestStudent = students[0];

        for (let i = 0; i < students.length; i++) {
            const actualStudent = students[i];

            const bestMean = bestStudent.calculateMean();
            const actualMean = actualStudent.calculateMean();
            if (actualMean > bestMean) {
                bestStudent = actualStudent
            }
        }
        return bestStudent;
    }

    //FUNZIONE PER TRASFORMARE TUTTO IN STRINGA 
    toString(){
       return super.toString() + `
        NOME: ${this.name}\n
        COGNOME: ${this.surname}\n
        ETA': ${this.calculateAge()}\n
        MIGLIORE STUDENTE: ${this.findBestStudent().name} ${this.findBestStudent().surname}`


    }
    
    // //FUNZIONE PER CALCOLARE L'ETA 
    // calculateAge(){
    //     const date = new Date();
    //     let year = date.getFullYear();
    //     let age = year-this._yob;
    //     return age;
    // }
    //45
}
