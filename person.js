class Person {
    constructor(name, surname, yob) {
        this.name = name;
        this.surname = surname;
        this._yob = yob
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
    //FUNZIONE PER CALCOLARE L' ETA 
    calculateAge() {

        let year = new Date().getFullYear()
        let age = year - this.yob;
        return age;
    }
    
    //FUNZIONE PER TRASFORMARE TUTTO IN STRINGA 
    toString() {
        let studentString = `
       NOME: ${this.name}\n
       COGNOME: ${this.surname}\n
       ETA': ${this.calculateAge()}\n
       `
        return studentString;
    }

}

