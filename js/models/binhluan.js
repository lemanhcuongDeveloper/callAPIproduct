"use strict";
class Binhluan {
    constructor(mabl, matk, masp, noidung, anhbl, thoigian) {
        this.mabl = mabl;
        this.matk = matk;
        this.masp = masp;
        this.noidung = noidung;
        this.anhbl = anhbl;
        this.thoigian = thoigian;
    }
    get Mabl() {
        return this.mabl;
    }
    set Mabl(value) {
        this.mabl = value;
    }
    get Matk() {
        return this.matk;
    }
    set Matk(value) {
        this.matk = value;
    }
    get Masp() {
        return this.masp;
    }
    set Masp(value) {
        this.masp = value;
    }
    get Noidung() {
        return this.noidung;
    }
    set Noidung(value) {
        this.noidung = value;
    }
    get Anhbl() {
        return this.anhbl;
    }
    set Anhbl(value) {
        this.anhbl = value;
    }
    get Thoigian() {
        return this.thoigian;
    }
    set Sthoigian(value) {
        this.thoigian = value;
    }
}
