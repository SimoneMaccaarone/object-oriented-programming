
//-------- CREAZIONE STUDENTI ---------

class Student {

    constructor(name, surname, yob, grades) {
        this.name = name;
        this.surname = surname;
        this.yob = yob;
        this.grades = grades;
    }

    // FUNZIONE PER CALCOLARE LA MEDIA
    calulateMean() {
        const grades = this.grades;
        let sum = 0
        for (let i = 0; i < grades.length; i++) {
            const grade = grades[i];
            sum += grade;
        }
        const mean = sum / grades.length;
        return mean;
    }

    toString(){
       
    }
    //NOME: Davide
    //COGNOME: Consigliere
    //ETA: 34
    //MEDIA: 5.4
    //MIGLIOR STUDENTE: Valentina Cherubuni



    calculateAge(){
        // deve ritornare un numero dell eta attuale dello studente (2023- yob)
    }
    //34
}