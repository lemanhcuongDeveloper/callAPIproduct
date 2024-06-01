"use strict";
class Danhmuc {
    constructor(madm, tendm, trangthai) {
        this.madm = madm;
        this.tendm = tendm;
        this.trangthai = trangthai;
    }
    get Madm() {
        return this.madm;
    }
    get Tendm() {
        return this.tendm;
    }
    get Trangthai() {
        return this.trangthai;
    }
    set Madm(value) {
        this.madm = value;
    }
    set Tendm(value) {
        this.tendm = value;
    }
    set Trangthai(value) {
        this.trangthai = value;
    }
}
