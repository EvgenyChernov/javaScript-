"use strict";

function getDiv() {
    let arrDiv = [];
    for (let i = 0; i < 90; i++) {
        let div = document.createElement('div');
        if (i % 9 === 0) {
            continue;
        }
        if (i % 2 !== 0) {
            div.className = 'chess-board__item_white';
            arrDiv.push(div.cloneNode(true));
        }
        if (i % 2 === 0 && i < 74) {
            div.className = 'chess-board__item_black';
            arrDiv.push(div.cloneNode(true));
        }
    }
    return arrDiv;
}

/**
 * Функия берет родительский узел, и помещает элемент массива (блок див) в родительский див
 */
function getChessBoard() {
    for (let i = 0; i < 80; i++) {
        chessBoard.appendChild(div[i]);
    }
}

// определение родительского элемента
let chessBoard = document.querySelector("#chess-board");
let div = [];
div = getDiv();

/**
 * обект содержащий в качесте параметров счетчики  необходиме для вычисления блоков для начертания разметки
 * @type {{verticalMarkingCounter: number, horizontalMarkingCounter: number, counterBottom: string[]}}
 */
const counter = {
    horizontalMarkingCounter: 0,
    verticalMarkingCounter: 8,
    counterBottom: ["A", "B", "C", "D", "E", "F", "G", "H"],
};

div.forEach(function (item, i) {
    if (i % 8 === 0 && i < 62) {
        item.innerHTML = counter.verticalMarkingCounter--;
        if (counter.verticalMarkingCounter % 2 === 0) {
            item.classList.add('color_white');
        }
    }
    if (i > 63) {
        item.innerHTML = counter.counterBottom[counter.horizontalMarkingCounter++];
    }
})

getChessBoard();