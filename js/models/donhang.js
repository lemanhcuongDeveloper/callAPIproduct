"use strict";
class Donhang {
    constructor(madh, matk, tenkh, sdt, diachi, ngaymua, trangthai) {
        this.madh = madh;
        this.matk = matk;
        this.tenkh = tenkh;
        this.sdt = sdt;
        this.diachi = diachi;
        this.ngaymua = ngaymua;
        this.trangthai = trangthai;
    }
    get Madh() {
        return this.madh;
    }
    set Madh(value) {
        this.madh = value;
    }
    get Matk() {
        return this.matk;
    }
    set Matk(value) {
        this.matk = value;
    }
    get Tenkh() {
        return this.tenkh;
    }
    set Tenkh(value) {
        this.tenkh = value;
    }
    get Sdt() {
        return this.sdt;
    }
    set Sdt(value) {
        this.sdt = value;
    }
    get Diachi() {
        return this.diachi;
    }
    set Diachi(value) {
        this.diachi = value;
    }
    get Gngaymua() {
        return this.ngaymua;
    }
    set Sngaymua(value) {
        this.ngaymua = value;
    }
    get Gtrangthai() {
        return this.trangthai;
    }
    set Strangthai(value) {
        this.trangthai = value;
    }
}
