"use strict";
class Chitiethoadon {
    constructor(macthd, masp, madh, soluong, giaban) {
        this.macthd = macthd;
        this.masp = masp;
        this.madh = madh;
        this.soluong = soluong;
        this.giaban = giaban;
    }
    get Macthd() {
        return this.macthd;
    }
    set Macthd(value) {
        this.macthd = value;
    }
    get Masp() {
        return this.masp;
    }
    set Masp(value) {
        this.masp = value;
    }
    get Gmadh() {
        return this.madh;
    }
    set Smadh(value) {
        this.madh = value;
    }
    get Gsoluong() {
        return this.soluong;
    }
    set Ssoluong(value) {
        this.soluong = value;
    }
    get Ggiaban() {
        return this.giaban;
    }
    set Sgiaban(value) {
        this.giaban = value;
    }
}
