
//-------- CREAZIONE STUDENTI ---------

class Student extends Person {
// cosa serve per costruire la classe. proprieta vengono inizilizzate ne costruttore
    constructor(name, surname, yob, grades = []) {
        super(name,surname,yob)
        this._grades = grades;
    }

    // GET per leggere , SET per scrivere // sono funzione pero fanno finta di essere delle variabili
    get grades() {
        return this._grades;
    }

    // CAMBIO DI ETA'
    get yob() {
        return this._yob;
    }

    set yob(value) {
        let oldYob = 1980;
        if (this._yob) {
            oldYob = this._yob;
        }
        this._yob = value;
        const newAge = this.calculateAge();
        if (newAge < 18 || newAge > 100) {
            this._yob = oldYob;
        }
    }

    // FUNZIONE NON HA BISGNO DELLA PAROLA CHIAVE

    // FUNZIONE PER CALCOLARE LA MEDIA
    calculateMean() {
        const grades = this.grades;
        if (grades.length=== 0){
            return 'nessun voto'
        }
        let sum = 0
        for (let i = 0; i < grades.length; i++) {
            const grade = grades[i];
            sum += grade;
        }
        const mean = sum / grades.length;
        return mean;
    }

    //FUNZIONE PER TRASFORMARE TUTTO IN STRINGA 
    toString() {
        return super.toString() + `
       MEDIA: ${this.calculateMean()}
       `
        
    }

    // //FUNZIONE PER CALCOLARE L' ETA 
    // calculateAge() {

    //     let year = new Date().getFullYear()
    //     let age = year - this.yob;
    //     return age;
    // }
    
}