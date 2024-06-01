"use strict";
class category {
    constructor(id, name) {
        this.id = id;
        this.name = name;
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
    get info() {
        return { "id": this.id, "name": this.name };
    }
}
