'use strict';

class Shape {
    constructor(name, color) {
        this._name = name;
        this._color = color;
    }

    getInfo() {
        return `${this._color} ${this._name}`;
    }
}

export default Shape;