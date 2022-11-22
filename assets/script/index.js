'use strict';

import Shape from './classes.js';

const create = document.querySelector('.create');
const selectShape = document.querySelector('.select-shape');
const selectColor = document.querySelector('.select-color');
const shapeBox = document.querySelector('.grid-container');
const info = document.querySelector('.shape-info');

let objectInfo = [];
let units = 0;

const rows = 4;
const columns = 6;
const blue = '#4e4eff';
const green = '#9f0';
const orange = '#f90';
const pink = '#f09';
const purple = '#90f';

create.addEventListener('click', () => {
    if (units < rows * columns) {
        createShape();
        units++;
        shapeInfo();
    } else {
        info.innerHTML = `Storage is full!`;
    }
});

/*******************************
 *  Functions
*******************************/

function createShape() {
    let chosenColor = '';
    let shape = selectShape.value.toLowerCase();
    switch (selectColor.value) {
        case 'Blue':
            chosenColor = blue;
            break;
        case 'Green':
            chosenColor = green;
            break;
        case 'Orange':
            chosenColor = orange;
            break;
        case 'Pink':
            chosenColor = pink;
            break;
        case 'Purple':
            chosenColor = purple;
            break;
        default:
            chosenColor = selectColor.value.toLowerCase();
    }

    if (shape !== 'choose a shape' && chosenColor !== 'choose a color') {
        objectInfo.push(new Shape(shape, selectColor.value));
        shapeBox.innerHTML += `<div class="${shape} shape" style="background-color:${chosenColor};"></div>`;
    } else {
        info.innerHTML = `Please choose a shape and color`;
    }
}

function shapeInfo() {
    let shapes = Array.from(document.querySelectorAll('.shape'));

    shapes.forEach((element) => {
        let index = shapes.indexOf(element);

        element.addEventListener('click', () => {
            info.innerHTML = `Unit ${index + 1}: ${objectInfo[index].getInfo()}`;
        });
    });
}