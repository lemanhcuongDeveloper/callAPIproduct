"use strict";
class Product {
    constructor(id, name, price, img, cate_id) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.img = img;
        this.cate_id = cate_id;
    }
    get info() {
        return { "id": this.id, "name": this.name, "price": this.price, "img": this.img, "cate_id": this.cate_id };
    }
    get Id() {
        return this.id;
    }
    set Id(id) {
        this.id = id;
    }
    get Name() {
        return this.name;
    }
    set Name(name) {
        if (this.name.length == 0 || name == "")
            this.name = "no name";
        else
            this.name = name;
    }
    set Price(price) {
        this.price = price;
    }
    set Cate_id(cate_id) {
        if (cate_id == "" || cate_id.length == 0)
            this.cate_id = "65fdmscvklsdm0";
        else
            this.cate_id = cate_id;
    }
    get Image() {
        return this.img;
    }
    set Image(img) {
        this.img = img;
    }
}
