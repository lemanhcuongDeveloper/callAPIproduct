"use strict";
class Yeuthich {
    constructor(masyt, masp, matk) {
        this.masyt = masyt;
        this.masp = masp;
        this.matk = matk;
    }
    get Masyt() {
        return this.masyt;
    }
    get Masp() {
        return this.masp;
    }
    get Matk() {
        return this.matk;
    }
    set Masyt(value) {
        this.masyt = value;
    }
    set Masp(value) {
        this.masp = value;
    }
    set Matk(value) {
        this.matk = value;
    }
}
