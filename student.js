
//-------- CREAZIONE STUDENTI ---------

class Student {

    constructor(name, surname, yob, grades) {
        this.name = name;
        this.surname = surname;
        this.yob = yob;
        this.grades = grades;
    }

    // FUNZIONE PER CALCOLARE LA MEDIA
    calculateMean() {
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
       let studentString= `
       NOME: ${this.name}\n
       COGNOME: ${this.surname}\n
       ETA': ${this.calculateAge()}\n
       MEDIA: ${this.calculateMean()}\n
       `
       return studentString
    }
    //NOME: Davide
    //COGNOME: Consigliere
    //ETA: 34
    //MEDIA: 5.4
    //MIGLIOR STUDENTE: Valentina Cherubuni


    calculateAge(){
    
        let year =new Date().getFullYear()
        let age = year-this.yob
        return age
    }
    //34
}