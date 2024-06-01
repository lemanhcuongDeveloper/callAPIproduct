"use strict";
class Taikhoan {
    constructor(matk, matkhau, tenkh, diachi) {
        this.matk = matk;
        this.matkhau = matkhau;
        this.tenkh = tenkh;
        this.diachi = diachi;
    }
    get Matk() {
        return this.matk;
    }
    get Matkhau() {
        return this.matkhau;
    }
    get Tenkh() {
        return this.tenkh;
    }
    get Diachi() {
        return this.diachi;
    }
    set Matk(value) {
        this.matk = value;
    }
    set Matkhau(value) {
        this.matkhau = value;
    }
    set Tenkh(value) {
        this.tenkh = value;
    }
    set Diachi(value) {
        this.diachi = value;
    }
}
